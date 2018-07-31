#!/usr/bin/python3
# coding=UTF-8
'''
爬取http://www.vgtime.com/每日新闻 BeautifulSoup4版本
'''
import urllib.request
import re
import os
import json
import time
import math
from bs4 import BeautifulSoup  # BeautifulSoup是一个可以从HTML或XML文件中提取数据的Python库


def getHtml(url):  # 根据给定的网址来获取网页详细信息，得到的html就是网页的源代码
    page = urllib.request.urlopen(url)
    html = page.read()
    return html.decode('UTF-8')


def getNews(html):  # 查询新闻标题和链接
    soup = BeautifulSoup(html, "html.parser")
    # 查找class='game_news_box'下且查找class='vg_list'的区块
    li_list = soup.select(".game_news_box .vg_list li")
    data_dict = {}
    for li in li_list:
        link = li.select(".img_box a")[0]
        href = "http://www.vgtime.com"+link.get("href")
        title = link.get("title")
        cover = link.find("img").get("src")
        p = li.select(".info_box p")[0].string
        username = li.select(".user_name")[0].string
        data_dict[href] = {"title": title,"cover": cover, "p": p, "username": username}
    data_dict["latestUpdate"] = math.ceil(time.time())
    return data_dict


def isFile(path, filename):  # 判断文件是否存在及文件是否为空
    is_path = os.path.isdir(path)
    is_file = False if not is_path else os.path.isfile(
        path+'/'+filename)  # 判断文件是否存在 XX if XX else XX是python中的三目运算
    is_empty = False if not is_file else os.path.getsize(
        path+'/'+filename)  # 判断文件是否为空
    if is_file and is_empty:
        return True
    elif not is_file:
        # print('文件不存在')
        return False
    else:
        # print('空文件')
        return False


def appendDict(a_dict, b_dict):   # 将b_dict追加到a_dict中
    # a_dict = {'a':'1111','b':'2222'}
    # b_dict = {'e':'5555','f':'6666'}
    for i in b_dict:
        a_dict[i] = b_dict[i]
    # print(a_dict)
    return a_dict


def readJson(path, filename):
    if isFile(path, filename):
        os.chdir(path)  # 修改当前工作目录
        with open(filename, 'r', encoding='utf-8') as f:   # Reading data back
            data = json.load(f)
        if type(data) == str:  # 判断data是str格式还是dict,若为str则转为dict
            json_str = json.loads(data)  # json编码的字符串转dict
            return json_str
        else:
            return data
    else:
        return {}  # 文件不存在(空)时返回空dict


def writeJson(path, filename, data):
    if not os.path.isdir(path):
        os.makedirs(path)
    os.chdir(path)  # 修改当前工作目录
    json_str = json.dumps(data)  # dict转换为JSON编码的字符串
    # data = json.loads(json_str)   # json编码的字符串转dict
    with open(filename, 'w') as f:   # Writing JSON data
        json.dump(json_str, f)


html = getHtml("http://www.vgtime.com/")  # 获取该网址网页详细信息，得到的html就是网页的源代码
# path = os.path.dirname(os.getcwd())+'/static'
path = os.getcwd()+'/jsonData'
filename = 'VGNewsInfo.json'
read_dict = readJson(path, filename)
if isFile(path, filename):
    if math.ceil(time.time())-read_dict["latestUpdate"] > 3600: #判断距离上次更新是否超过3600秒
        data_dict = getNews(html)
        data_dict = appendDict(read_dict, data_dict)
        writeJson(path, filename, data_dict)
        read_dict = data_dict
else:
    data_dict = getNews(html)
    data_dict = appendDict(read_dict, data_dict)
    writeJson(path, filename, data_dict)
    read_dict = data_dict

# print(len(read_dict))
# for x in read_dict:
#     print(read_dict[x])
#     print(x)

print(json.dumps(read_dict))  # 需要输出JSON字符串,否则返回的数据无法解析

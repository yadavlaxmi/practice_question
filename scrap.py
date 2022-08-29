from email import parser
from tokenize import Name
from bs4 import BeautifulSoup
# from pprint import pprint
import requests
import json 
url=requests.get("https://www.imdb.com/india/top-rated-indian-movies/?ref_=nv_mv_250_in")
# print(url.text)
scrap=BeautifulSoup(url.content,"html.parser")
# print(scrap)
def scraped_movie():
    movie_name= scrap.find("div",class_="lister")
# print(movie_name)
    list=[]
    for i in movie_name:
        td=i.find_all("td")
    # print(td)

    dic={}
    for j in td:
        rank=i.find('td',"bold").get_Text()[:-1]
#     name=list.append(movie_name("div",class_="titleColumn"))
# print(name)

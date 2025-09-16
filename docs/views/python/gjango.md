# Django

：：：django

## 1. 安装

```bash
pip install django
```

## 2. 创建项目

```bash
django-admin startproject mysite
```

## 3. 创建应用

```bash
python manage.py startapp polls
```

## 4. 配置

```bash
# settings.py
INSTALLED_APPS = [
    'polls',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

## 5. 运行

```bash
1.激活虚拟环境
python3 -m venv venv
source /Users/ryb/Desktop/learn/python/cli/django_test1/venv/bin/activate
# or
source venv/bin/activate
2.然后在激活的虚拟环境中安装Django
pip install django
cd mysite
3.运行服务器
python manage.py runserver
```

## 6. 创建模型

```bash
# models.py
from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
```

## 7. 迁移

```bash
python manage.py makemigrations polls
python manage.py migrate
```

## 8. 创建管理员

```bash
python manage.py createsuperuser
```

## 9. 创建视图

```bash
# views.py
from django.http import HttpResponse
from .models import Question

def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    output = ', '.join([q.question_text for q in latest_question_list])
    return HttpResponse(output)
```

FROM python:3.10
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
RUN python manage.py collectstatic -link --noinput
COPY . /app/


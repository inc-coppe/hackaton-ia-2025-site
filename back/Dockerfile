FROM python:3.9-slim-buster

WORKDIR /app


COPY credentials.json /app/credentials.json

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade pip && \
  pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

ENTRYPOINT ["./entrypoint.sh"]

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

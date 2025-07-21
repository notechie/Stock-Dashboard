from flask import Flask, jsonify
from flask_cors import CORS
import yfinance as yf
from sklearn.linear_model import LinearRegression
import numpy as np

app = Flask(__name__)
CORS(app)

COMPANIES = [
    {"name": "Apple", "symbol": "AAPL"},
    {"name": "Microsoft", "symbol": "MSFT"},
    {"name": "Google", "symbol": "GOOGL"},
    {"name": "Amazon", "symbol": "AMZN"},
    {"name": "Tesla", "symbol": "TSLA"},
    {"name": "Meta", "symbol": "META"},
    {"name": "Nvidia", "symbol": "NVDA"},
    {"name": "Berkshire Hathaway", "symbol": "BRK-A"},
    {"name": "Visa", "symbol": "V"},
    {"name": "Johnson & Johnson", "symbol": "JNJ"}
]

@app.route('/api/companies')
def get_companies():
    return jsonify(COMPANIES)

@app.route('/api/stock/<symbol>')
def get_stock(symbol):
    data = yf.Ticker(symbol).history(period="1y")
    chart_data = {
        "dates": data.index.strftime('%Y-%m-%d').tolist(),
        "close": data['Close'].tolist()
    }
    return jsonify(chart_data)

@app.route('/api/predict/<symbol>')
def predict(symbol):
    data = yf.Ticker(symbol).history(period="1y")
    closes = data['Close'].values
    X = np.arange(len(closes)).reshape(-1, 1)
    y = closes

    model = LinearRegression()
    model.fit(X, y)
    next_day = np.array([[len(closes)]])
    prediction = model.predict(next_day)[0]
    return jsonify({"predicted_close": float(prediction)})

if __name__ == '__main__':
    app.run(debug=True)

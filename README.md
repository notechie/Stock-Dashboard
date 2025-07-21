# 📌 Stock Market Dashboard

For this project, I built a full-stack Stock Market Dashboard that allows users to view historical stock data and a predicted next-day closing price for selected companies. The goal was to create a clean, responsive interface that provides clear visualizations for market trends and price fluctuations.

[View the Live App](https://stock-dashboard-frontend-omega.vercel.app)

## Frontend Development:
The frontend was built using ReactJS for efficient component-based architecture. Chart.js (via react-chartjs-2) was used to vercel interactive stock line charts. The layout includes a scrollable left panel listing companies and a main panel that dynamically updates to show selected stock charts and predicted prices. Tailwind CSS was used to create a clean, responsive UI.

## Backend Development:
The backend is powered by Flask. It provides a REST API to fetch the list of companies, historical stock data (using the yfinance library), and next-day closing price predictions using a simple Linear Regression model trained on past data. Data is served in JSON format to the frontend.

## Challenges Faced:
One key challenge was ensuring deployment compatibility—optimizing the backend and frontend for deployment on free platforms like Render and Vercel. Managing environment variables, and keeping the UI performant were also important considerations. Designing the UI to be both responsive and visually informative was a priority — keeping it clean while showing complex data like time series charts required tweaking Chart.js options.

This project provided valuable experience in integrating data science models into full-stack web applications, bridging the gap between machine learning and user-facing dashboards.

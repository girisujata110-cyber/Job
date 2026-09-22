```css
.hero {
  min-height: 500px;
  background: linear-gradient(135deg, skyblue, #e6f7ff);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
}

.hero h1 {
  font-size: 50px;
  color: #222;
  margin-bottom: 20px;
}

.hero h1 span {
  color: #ff1493;
}

.hero p {
  font-size: 19px;
  color: #444;
  margin-bottom: 35px;
}

.search-box {
  background: white;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  gap: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.search-box input {
  padding: 14px;
  width: 230px;
  border: 1px solid #ddd;
  border-radius: 7px;
  outline: none;
}

.search-box button,
.job-card button {
  background: #2196f3;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 7px;
  cursor: pointer;
}

.section {
  padding: 70px 30px;
  text-align: center;
}

.section h2,
.why-us h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

.section-text {
  color: #666;
  margin-bottom: 35px;
}

.category-grid,
.job-grid,
.why-grid {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.card {
  background: white;
  width: 220px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  font-size: 35px;
}

.card h3 {
  font-size: 18px;
  margin: 15px 0 5px;
}

.card p {
  font-size: 14px;
  color: #777;
}

.job-card {
  width: 300px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: left;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.job-card h3 {
  color: #2196f3;
  margin-bottom: 15px;
}

.job-card p {
  margin: 8px 0;
  color: #555;
}

.job-card button {
  margin-top: 15px;
}

.why-us {
  padding: 70px 30px;
  text-align: center;
  background: #e0f5ff;
}

.why-grid {
  margin-top: 40px;
}

.why-grid div {
  width: 250px;
  padding: 25px;
}

.why-grid div:first-child {
  font-size: 35px;
}

.why-grid h3 {
  margin: 12px 0;
}

.why-grid p {
  color: #666;
}

@media (max-width: 768px) {
  .search-box {
    flex-direction: column;
  }

  .search-box input {
    width: 100%;
  }

  .hero h1 {
    font-size: 35px;
  }
}
```

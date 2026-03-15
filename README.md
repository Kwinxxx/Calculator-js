# 🧮 Calculator

A clean and functional calculator built with vanilla JavaScript using OOP principles.

## 🖥️ Preview

> Take a screenshot of your app and upload it as `images/preview.png`

```
![Preview](images/preview.png)
```

---

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (ES6+)

---

## ✨ Features

- ➕ Addition, ➖ Subtraction, ✖️ Multiplication, ➗ Division
- ⌫ Backspace — delete last character
- 🅲 Clear — reset calculator
- 📜 History — shows previous expression
- ❌ Error handling — division by zero

---

## 🏗️ Architecture (OOP)

The project is built with 2 classes following the principle of separation of concerns:

| Class | Responsibility |
|-------|---------------|
| `Calculator` | State management and math logic (calculate, clear) |
| `CalculatorUI` | DOM manipulation, event handling, display updates |

---

## 💡 Key Concepts Used

- **OOP** — separation of logic and UI into classes
- **DRY principle** — single handler for all digit buttons via `data-js-is-digit`
- **State management** — tracking `firstNum`, `secondNum`, `operation`, `result`
- **Switch/case** — for math operations
- **`??` operator** — nullish coalescing for clean state updates
- **`includes()`** — for operator detection

---

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Kwinxxx/Calculator-js.git
```

2. Open `index.html` in your browser — no build tools required.

---

## 🔮 Planned Features

- [ ] Keyboard support
- [ ] Decimal point support
- [ ] Percentage button
- [ ] Calculation history log

---

## 👤 Author

**Kwinxxx** — [GitHub](https://github.com/Kwinxxx)

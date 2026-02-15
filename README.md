# 🔢 Real-Time Character Counter

A simple and interactive **Real-Time Character Counter** web application built using **HTML, CSS, and JavaScript**.

This project allows users to type inside a textarea while instantly displaying:
- the total number of characters typed
- the remaining characters allowed

The maximum character limit is **50 characters**, and the system automatically prevents users from exceeding it.

---

## 🚀 Features

- ✅ Real-time character counting
- ✅ Remaining characters counter
- ✅ Maximum character limit (50 characters)
- ✅ Automatically prevents typing beyond the limit
- ✅ Clean and responsive UI
- ✅ Lightweight and fast (no frameworks)

---

## 🧠 How It Works

- When the user types inside the textarea, the counter updates instantly.
- If the user reaches 50 characters, additional input is automatically trimmed.
- The app updates:
  - **Total Characters**
  - **Remaining Characters**

---

## 🛠 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (DOM Manipulation)**

---

## 📂 Project Structure

```
Real-time-Charater-Counter
│
├── index.html
├── style.css
├── script.js
└── docs/
    └── (screenshots / documentation files)
````

---

## ⚙️ Installation & Run

1️⃣ Clone the repository:

```bash
git clone https://github.com/kholouddiaa/Real-time-Charater-Counter.git
```

2️⃣ Open the project folder:

```bash
cd Real-time-Charater-Counter
```

3️⃣ Run the project:

Simply open `index.html` in your browser.

---

## 📌 Example Logic (JavaScript)

```js
if (inputText.value.length >= 50) {
    inputText.value = inputText.value.substring(0, 50);
}
totalCounter.textContent = inputText.value.length;
remainingCounter.textContent = 50 - inputText.value.length;
```

---

## 📸 Screenshots

You can add screenshots inside the `docs/` folder and display them here:

```md
![App Screenshot](docs/screenshot.png)
```

---

## 🌟 Future Improvements

* Add word counter (Words Count)
* Add dynamic limit selection (user chooses max length)
* Add warning color when remaining characters are low
* Add support for multiple input fields

---

## 👩‍💻 Developer

**Kholoud Diaa**
Frontend Developer

---

## 📄 License

This project is open-source and created for educational and portfolio purposes.

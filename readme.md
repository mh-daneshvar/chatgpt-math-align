# Math Align Extension for ChatGPT

**Math Align** is a Chrome extension developed to resolve issues with the display of math formulas rendered with [KaTeX](https://katex.org) in **ChatGPT**, specifically when used in right-to-left (RTL) languages such as Arabic or Persian. By manually setting the text direction to left-to-right (LTR) for math formulas, this extension ensures that they are displayed correctly within the ChatGPT interface.

## Features

- Manually set the direction of KaTeX-rendered math formulas to LTR in ChatGPT.
- Designed for users interacting with ChatGPT in RTL languages (e.g., Arabic, Persian).
- Easily accessible via the right-click context menu when using ChatGPT.

## How to Use

Follow these steps to install and use the **Math Align** extension specifically for ChatGPT:

### Installation

1. **Clone or Download the Project**:
    - Open your terminal and run the following command to clone the repository:
      ```bash
      git clone https://github.com/mh-daneshvar/chatgpt-math-align
      ```
    - Alternatively, you can download the ZIP file of this project and extract it.

2. **Open Chrome Extensions**:
    - In your Chrome browser, go to the following URL:
      ```
      chrome://extensions
      ```
    - Alternatively, you can click the Chrome menu, go to **More Tools**, and then **Extensions**.

3. **Enable Developer Mode**:
    - In the top right corner, toggle the **Developer Mode** switch to ON.

4. **Load the Unpacked Extension**:
    - Click the **Load unpacked** button.
    - Select the directory where you cloned or extracted the extension (`math-align-extension`).

5. **Extension Installed**:
    - Once installed, the extension icon should appear in your Chrome toolbar.

### Usage with ChatGPT

1. Open **ChatGPT** in your browser (visit [chat.openai.com](https://chat.openai.com)).
2. Ask ChatGPT a mathematical question, especially when using **right-to-left (RTL)** languages (e.g., Arabic, Persian).
3. If the mathematical formula is displayed incorrectly, **select** the problematic math text.
4. **Right-click** on the selected text.
5. From the context menu, select the **"Math Align"** action.
6. The extension will apply the **left-to-right (LTR)** direction to the nearest math formula, ensuring it displays correctly within ChatGPT.

### About

This extension is particularly useful for users of ChatGPT who ask mathematical questions in RTL languages (such as Arabic or Persian). It helps to align the mathematical formulas correctly when they are misaligned due to the RTL context.

To learn more about KaTeX, the library used to render these formulas, visit [katex.org](https://katex.org).

### Developed By
- [Mohammad Hassan Daneshvar](https://github.com/mh-daneshvar)

---

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

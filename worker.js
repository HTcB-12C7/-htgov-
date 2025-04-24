export default {
    async fetch(request) {
        const url = new URL(request.url);
        // 判断是哪个路径
        if (url.pathname === "/intro.html") {
            return new Response(`<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>黑铁工作室简介</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #3e2723; 
                    display: flex;
                    height: 100vh;
                    color: #e0e0e0;
                    flex-direction: column;
                }
                .header {
                    position: relative;
                    width: 100%;
                    height: 60px;
                    background: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    font-weight: bold;
                    color: white;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                }
                .header span {
                    color: red;
                }
                .logo {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 60px;
                    width: 60px;
                    object-fit: cover;
                    cursor: pointer;
                    z-index: 10;
                }
                .main-container {
                    display: flex;
                    flex-grow: 1;
                    width: 100%;
                }
                .sidebar {
                    width: 200px;
                    background: linear-gradient(45deg, #5d4037, #8d6e63);
                    padding: 20px;
                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                }
                .sidebar h3 {
                    color: gold;
                    text-align: center;
                    border-bottom: 2px solid gold;
                    padding-bottom: 10px;
                }
                .sidebar ul {
                    list-style: none;
                    padding: 0;
                }
                .sidebar ul li {
                    margin: 10px 0;
                }
                .sidebar ul li a {
                    text-decoration: none;
                    color: #fff;
                    display: block;
                    padding: 10px;
                    background: #6d4c41;
                    border-radius: 5px;
                    text-align: center;
                    transition: 0.3s;
                }
                .sidebar ul li a:hover {
                    background: #8d6e63;
                }
                .content {
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding: 40px;
                }
                .container {
                    background: rgba(0, 0, 0, 0.6);
                    padding: 30px 40px;
                    border-radius: 10px;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
                    max-width: 800px;
                }
                h2 {
                    font-size: 2em;
                    margin-bottom: 20px;
                    border-bottom: 2px solid gold;
                    padding-bottom: 10px;
                }
                p, li {
                    line-height: 1.8;
                }

                /* 美化 Google Translate */
                #google_translate_element {
                font-size: 0;
                z-index: 9999;
                }

                /* 美化下拉框：黑底蓝字 */
                .goog-te-combo {
                padding: 5px 10px;
                font-size: 14px;
                background-color: #000000 !important;  /* 黑色背景 */
                color: #03a9f4 !important;              /* 蓝色字体 */
                border: 1px solid #03a9f4 !important;
                border-radius: 5px;
                cursor: pointer;
                }

                /* 去掉 Google logo 和提示文字 */
                .goog-logo-link,
                .goog-te-gadget span {
                display: none !important;
                }

                /* 取消聚焦样式 */
                .goog-te-combo:focus {
                outline: none;
                box-shadow: none;
                }

                /* 完全隐藏顶部的默认翻译横幅 */
                iframe.goog-te-banner-frame {
                display: none !important;
                }
                body {
                top: 0px !important;
                }

                /* 可选隐藏右上角 G 图标 */
                .goog-te-gadget-icon {
                display: none !important;
                }

            </style>
        </head>
        <body>
            <div class="header">
                <a href="/">
                    <img class="logo" src="https://raw.githubusercontent.com/HTcB-12C7/htchocolate.github.io/main/DALL%C2%B7E%202025-03-12%2015.26.22%20-%20A%20highly%20realistic%20and%20detailed%20logo%20for%20'Black%20Iron%20Studio'.%20The%20design%20features%20a%20tactical%20and%20metallic%20aesthetic%20with%20a%20military%20theme.%20At%20the%20cent.webp" alt="返回主页">
                </a>
                黑铁工作室主页 <span>【灰度开放测试中】</span>
                
                <button id="lang-toggle" style="
                    position: absolute;
                    top: 10px;
                    right: 120px;
                    padding: 5px 10px;
                    background: black;
                    color: #03a9f4;
                    border: 1px solid #03a9f4;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                ">🌐 Language</button>

                <div id="google_translate_element" style="
                    position: absolute;
                    top: 50px;
                    right: 10px;
                    display: none;
                    background: rgba(0, 0, 0, 0.8);
                    padding: 8px;
                    border-radius: 5px;
                    z-index: 9999;
                "></div>
            </div>

            <div class="main-container">
                <div class="sidebar">
                    <h3>黑铁工作室</h3>
                    <ul>
                        <li><a href="https://htgov.sh-cqxzjxcomputer.workers.dev/">黑铁 VIP</a></li>
                        <li><a href="https://htcb-12c7.github.io/HT_RedhatHacker_boxsell/">黑铁红帽黑客自学箱</a></li>
                        <li><a href="https://htcb-12c7.github.io/HT_QRTool/">黑铁二维码工具</a></li>
                        <li><a href="https://htchocolate.kit.com/6eba531f42">黑铁英格ZOO G</a></li>
                        <li><a href="https://hpubgmjby.sh-cqxzjxcomputer.workers.dev/">小克力【测试未部署】</a></li>
                        <li><a href="/intro.html">黑铁工作室简介</a></li>
                    </ul>
                </div>
                <div class="content">
                    <div class="container">
                        <h2>黑铁工作室简介</h2>
                        <p>黑铁工作室（HT Studio）是一个集创意开发、极客技术与独立项目实践为一体的自由团队。我们致力于打造具有实战价值与娱乐性的项目，包括但不限于：</p>
                        <ul>
                            <li>红帽 / 白帽黑客工具</li>
                            <li>EXE 软件 & 网页交互工具</li>
                            <li>和平精英等游戏辅助、模拟飞行体验</li>
                            <li>自媒体内容运营、AI 脚本研究</li>
                        </ul>
                        <p>我们崇尚自由探索、技术美学和极致细节。欢迎有志者加入，共建黑铁宇宙！</p>
                    </div>
                </div>
            </div>

            <!-- ✅ 放在 </body> 前 -->
<script>
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'zh-CN',
      includedLanguages: 'zh-CN,en,ja,ko,fr,es,de,ru',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    // 💡 放这里确保等加载完后再绑定
    setTimeout(() => {
      const toggle = document.getElementById("lang-toggle");
      const box = document.getElementById("google_translate_element");
      if (toggle && box) {
        toggle.addEventListener("click", () => {
          box.style.display = box.style.display === "none" ? "block" : "none";
        });
      }
    }, 500); // 延迟 0.5 秒绑定，确保控件渲染完成
  }
</script>
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<script>
window.addEventListener('load', function () {
  const toggle = document.getElementById("lang-toggle");
  const box = document.getElementById("google_translate_element");
  if (toggle && box) {
    toggle.addEventListener("click", () => {
      box.style.display = box.style.display === "none" ? "block" : "none";
    });
  }
});
</script>


        </body>
        </html>`, {
                headers: { "Content-Type": "text/html; charset=UTF-8" }
            });
        }
        
        return new Response(`<!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>VIP 加入</title>
                <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
                <script>
                    (function(){
                        emailjs.init("sbFx6huxFVrhXPqr5"); // 你的 EmailJS user_id
                    })();
                    
                    async function sendEmail(event) {
                        event.preventDefault();
                        const form = event.target;
                        const formData = new FormData(form);
                        const data = Object.fromEntries(formData.entries());

                        try {
                            const response = await emailjs.send("htcoutlook01", "t_htcoutlook01", {
                                name: data.name,
                                email: data.email,
                                message: data.message
                            });

                            alert("邮件已成功发送！感谢您的加入。");
                        } catch (error) {
                            alert("邮件发送失败：" + error.text);
                        }
                    }
                </script>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                        background-color: #3e2723; 
                        display: flex;
                        height: 100vh;
                        color: #e0e0e0;
                        flex-direction: column;
                    }

                    /* 顶部横幅 */
                    .header {
                        position: relative;
                        width: 100%;
                        height: 60px;
                        background: black;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 20px;
                        font-weight: bold;
                        color: white;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }
                    .header span {
                        color: red; /* “测试中暂未开放” 变红色 */
                    }

                    /* Logo 图标 */
                    .logo {
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 60px;
                        width: 60px;
                        object-fit: cover;
                        cursor: pointer;
                        z-index: 10;
                    }

                    /* 页面布局 */
                    .main-container {
                        display: flex;
                        flex-grow: 1;
                        width: 100%;
                    }

                    /* 左侧导航菜单 */
                    .sidebar {
                        width: 200px;
                        background: linear-gradient(45deg, #5d4037, #8d6e63);
                        padding: 20px;
                        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
                        display: flex;
                        flex-direction: column;
                    }
                    .sidebar h3 {
                        color: gold;
                        text-align: center;
                        border-bottom: 2px solid gold;
                        padding-bottom: 10px;
                    }
                    .sidebar ul {
                        list-style: none;
                        padding: 0;
                    }
                    .sidebar ul li {
                        margin: 10px 0;
                    }
                    .sidebar ul li a {
                        text-decoration: none;
                        color: #fff;
                        display: block;
                        padding: 10px;
                        background: #6d4c41;
                        border-radius: 5px;
                        text-align: center;
                        transition: 0.3s;
                    }
                    .sidebar ul li a:hover {
                        background: #8d6e63;
                    }

                    /* 主内容区域 */
                    .content {
                        flex-grow: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                    }
                    .container {
                        background: rgba(0, 0, 0, 0.6);
                        padding: 20px 40px;
                        border-radius: 10px;
                        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
                        text-align: center;
                        position: relative;
                    }
                    .vip-badge {
                        position: absolute;
                        top: -20px;
                        left: 50%;
                        transform: translateX(-50%);
                        background-color: gold;
                        color: #3e2723;
                        padding: 5px 20px;
                        border-radius: 5px;
                        font-weight: bold;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                    }
                    h2 {
                        margin-bottom: 20px;
                        font-size: 2em;
                        border-bottom: 2px solid gold;
                        display: inline-block;
                        padding-bottom: 5px;
                    }
                    form {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    label {
                        margin: 10px 0;
                        width: 100%;
                    }
                    input, textarea {
                        width: 100%;
                        padding: 10px;
                        margin-top: 5px;
                        border: 1px solid #5d4037;
                        border-radius: 5px;
                        background-color: #4e342e;
                        color: #e0e0e0;
                    }
                    input:focus, textarea:focus {
                        outline: none;
                        border-color: gold;
                    }
                    button {
                        margin-top: 20px;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        background: linear-gradient(45deg, #8d6e63, #a1887f);
                        color: #ffffff;
                        font-size: 1em;
                        cursor: pointer;
                        transition: background 0.3s ease;
                    }
                    button:hover {
                        background: linear-gradient(45deg, #a1887f, #8d6e63);
                    }
                </style>
            </head>
            <body>

                <!-- 顶部横幅 -->
                <div class="header">
                    <a href="/">
                        <img class="logo" src="https://raw.githubusercontent.com/HTcB-12C7/htchocolate.github.io/main/DALL%C2%B7E%202025-03-12%2015.26.22%20-%20A%20highly%20realistic%20and%20detailed%20logo%20for%20'Black%20Iron%20Studio'.%20The%20design%20features%20a%20tactical%20and%20metallic%20aesthetic%20with%20a%20military%20theme.%20At%20the%20cent.webp" 
                            alt="返回主页">
                    </a>
                    黑铁工作室主页 <span>【灰度开放测试中】</span>
                </div>

                <!-- 页面主体 -->
                <div class="main-container">
                    
                    <!-- 左侧导航栏 -->
                    <div class="sidebar">
                        <h3>黑铁工作室</h3>
                        <ul>
                            <li><a href="https://htgov.sh-cqxzjxcomputer.workers.dev/">黑铁 VIP</a></li>
                            <li><a href="https://htcb-12c7.github.io/HT_RedhatHacker_boxsell/">黑铁红帽黑客自学箱</a></li>
                            <li><a href="https://htcb-12c7.github.io/HT_QRTool/">黑铁二维码工具</a></li>
                            <li><a href="https://htchocolate.kit.com/6eba531f42">黑铁英格ZOO G </a></li>
                            <li><a href="https://hpubgmjby.sh-cqxzjxcomputer.workers.dev/">小克力【测试未部署】</a></li>
                            <li><a href="/intro.html">黑铁工作室简介</a></li>
                        </ul>
                    </div>

                    <!-- 主内容 -->
                    <div class="content">
                        <div class="container">
                            <div class="vip-badge">VIP</div>
                            <h2>加入黑铁 VIP（仅限海外）</h2>
                            <form id="vip-form" onsubmit="sendEmail(event)">
                                <label for="name">姓名:</label>
                                <input type="text" id="name" name="name" required>
                                <label for="email">邮箱:</label>
                                <input type="email" id="email" name="email" required>
                                <label for="message">留言:</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                                <button type="submit">提交</button>
                            </form>
                        </div>
                    </div>

                </div>

            </body>
            </html>`, { headers: { "Content-Type": "text/html; charset=UTF-8" } });
    }
};  // 8

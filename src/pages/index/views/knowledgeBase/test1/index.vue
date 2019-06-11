<template>
    <div>
        <!-- <pagina
            :class="$style.pagins"
            @getPagination="getPagination"
            :paginationProps="pagination"
            :pageSizes="pageSizes"
            background
            :layout="paginationLayout"
            :pageTotal="Number(totalNum) || 0">
        </Pagina> -->
        <video width="320" height="240" controls="controls">
            <!-- <source src="/i/movie.ogg" type="video/ogg">
            <source src="/i/movie.mp4" type="video/mp4"> -->
            Your browser does not support the video tag.
        </video><br/>
        <hr>
        <b>加粗文本</b><br/>
        <i>斜体文本</i><br/>
        <code>code</code><br/>
        <sub>xiabiao</sub> 和 <sup>shangbiao</sup><br/>
        <em>这里是em</em><br/>
        <strong>strong</strong><br/>
        <ins>ins-qqqqq</ins><br/>
        <del>del-qqqqq</del><br/>
        <code>code-计算机输出</code><br/>
        <kbd>kbd-qqqqq</kbd><br/>
        <samp>samp-qqqqq</samp><br/>
        <var>var-qqqqq</var><br/>
        <pre>pre-qqqqq</pre><br/>
        <abbr title="World Health Organization">HTML 引文, 引用, 及标签定义</abbr><br/>
        <p><bdo dir="tr">从左到右</bdo></p>
        <p><bdo dir="trl">从右到左</bdo></p>
        <p>下面是缩进标签</p>
        <blockquote cite="http://www.worldwildlife.org/who/index.html">
            jskdafjksfjksdafjsakdjfksdjfsdkfjsoweorwioerweiqruweqiruwieoruweiofsjdk
        </blockquote>
        <q>dsfdft43134</q>
        <dfn>dfn--定义项目</dfn>
        <hr>
        <select>
            <optgroup label="Swedish Cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
            </optgroup>
            <optgroup label="German Cars">
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </optgroup>
        </select>
        <el-button type="primary" size="small" @click="getPagination">wrrwer</el-button>
        <b>粗体文本</b><br/>
        <code>计算机代码</code><br/>
        <em>强调文本</em><br/>
        <i>斜体文本</i><br/>
        <kbd>键盘输入</kbd> <br/>
        <pre>预格式化文本</pre><br/>
        <small>更小的文本</small><br/>
        <strong>重要的文本</strong><br/>
        <abbr> （缩写）</abbr><br/>
        <address> （联系信息）</address><br/>
        <bdo> （文字方向）</bdo> <br/>
        <blockquote> （从另一个源引用的部分）</blockquote><br/>
        <cite> （工作的名称）</cite><br/>
        <del> （删除的文本）</del><br/>
        <ins> （插入的文本） </ins><br/>
        <sub> （下标文本）</sub><br/>
        <sup> （上标文本）</sup><br/>
        无序列表
        <ul>
            <li>项目</li>
            <li>项目</li>
        </ul>
        有序列表
        <ol>
            <li>第一项</li>
            <li>第二项</li>
        </ol>
        定义列表
        <dl>
            <dt>项目 1</dt>
            <dd>描述项目 1</dd>
            <dt>项目 2</dt>
            <dd>描述项目 2</dd>
        </dl>
        表格（Tables）
        <table border="1">
            <tr>
                <th>表格标题</th>
                <th>表格标题</th>
            </tr>
            <tr>
                <td>表格数据</td>
                <td>表格数据</td>
            </tr>
        </table>
        <div>
            <canvas id="myCanvas">canvas浏览器是否支持</canvas>
            <h3>controls该属性，则向用户显示音频控件（比如播放/暂停按钮）。</h3>
            <h3>autoplay该属性，则音频在就绪后马上播放。</h3>
            <h3>loop该属性，则每当音频结束时重新开始播放</h3>
            <h3>muted该属性，则音频输出为静音。</h3>
            <h3>preload规定当网页加载时，音频是否默认被加载以及如何被加载。(auto\meta\none)</h3>
            <!--audio controls autoplay loop-->
            <audio controls muted preload="none">
                <source src="../../../../../assets/audio/bahayi.mp3">
            </audio>
            <video width="300" height="140" controls>
                <source src="../../../../../assets/audio/bahayi.mp3">
            </video>
            <nav>
                <a href="#">html</a>|
                <a href="#">css</a>|
                <a href="#">js</a>|
            </nav>
            <article>
                <p>article 文章啥的</p>
            </article>
            <aside>
                <p>234</p>
                <p>aaaa</p>
            </aside>
            <ul>
                <li>用户名 <bdi>zhang</bdi>:60 分</li>
                <li>用户名 <bdi>weng</bdi>:60 分</li>
            </ul>
        </div>
        <div>
            <details open>
                <p>details open 展开内容</p>
                <summary>copyright 1999-2011</summary>
                <p>zheliadnandsfndkjk</p>
                <p>womengkydaiak</p>
            </details>
        </div>
        <div>
            <!--dskfdskfj <dialog open>thsnasfksd</dialog>-->
            <figure>
                <figcaption>eooejfdksdfs</figcaption>
            </figure>
            <header>
                <p>这里是头部标签</p>
            </header>
            <p>
                do not fotget to buy <mark>milk</mark> today.
            </p>
            <meter value="2" min="0" max="10"></meter><br/>
            <progress value="63" max="100">kk</progress>
            <div>
                <ruby>
                    汉 <rp>(</rp><rt>Han</rt><rp>)</rp>
                    字 <rp>(</rp><rt>zi</rt><rp>)</rp>
                </ruby>
            </div>
            <div>
                <section>
                    <h1>WWF</h1>
                    <p>dksjfdsuiti dhasjkl</p>
                    <p>我们在每天早上 <time>16:20</time></p>
                    <p>wo zai <time datetime="2019-02-22">jie ri kuai le </time></p>
                    <p> <strong>注意：</strong>这里不支持啦！</p>
                </section>
            </div>
            <div>
                <h1>画布图1</h1>
                <canvas id="myCanvas1" width="200" height="100" style="border:1px solid red;">
                    您的浏览器不支持 HTML5 canvas 标签。</canvas>
            </div>
            <div>
                <h3>这里是svg</h3>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
                    <polygon points="100,10 40,180 190,60 10,60 160,180"
                             style="fill:lime; stroke:purple; stroke-width:5; fill-rule:evenodd;"/>
                </svg>
            </div>
            <div>
                <h3>可以拖拽的内容</h3>
                <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <p id="drag1" draggable="true" ondragstart="drag(event)">dskfjksldfjskldfkdslfnkldnfkds</p>
            </div>
            <div>
                <form action="demo-form.php">
                    选择你喜欢的颜色：<input type="color" name="favcolor"><br/><br/>
                    选择日期：<input type="date" name="bdaty"><br/><br/>
                    选择指定的时间：<input type="datetime-local" name="bdatytime"><br/><br/>
                    生日：<input type="month" name="bdaymonth"><br/><br/>
                    输入邮箱：<input type="email" name="usremail"><br/><br/>
                    数量：(1到5之间)<input type="number" name="quantity" size="mini" min="1" max="5" maxlength="30"><br/><br/>
                    搜索： <input type="search" name="googlesearch"><br/><br/>
                    电话号码： <input type="tel" name="usrtel"><br/><br/>
                    url: <input type="url" name="homepage"><br/><br/>
                    选择周: <input type="week" name="year_week"><br/><br/>


                    <input type="sbumit" value="提交">
                </form>
            </div>
            <footer>
                <p>底部</p>
                <p><time></time></p>
            </footer>
        </div>
    </div>
</template>

<script>
// 分页组件
// import Pagina from '../components/pagin';
export default {
    // components: {Pagina},
    data() {
        return {
            pagination: {}
        };
    },
    mounted() {
        this.anvas();
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        },
        drag(ev) {
            ev.dataTransfer.setData('Text', ev.target.id);
        },
        drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData('Text');
            ev.target.appendChild(document.getElementById(data));
        },
        anvas() {
            let cod = document.getElementById('myCanvas1');
            let ctx = cod.getContext('2d');
            // 斜线
            // ctx.moveTo(0,0);
            // ctx.lineTo(200,100);
            // 圆
            // ctx.beginPath();
            // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
            // ctx.stroke();
            // 背景色
            // ctx.fillStyle = '#FF0000';
            // ctx.fillRect(0, 0, 160, 85);
            // 输出文本
            // ctx.fillStyle = '#FF0000';
            // ctx.font = '30px Arial';
            // // ctx.fillText('Hello World', 10, 50);
            // ctx.strokeText('Hello World', 10, 50);
            //
            let grd = ctx.createLinearGradient(75, 50, 5, 90, 60, 100);
            grd.addColorStop(0, 'red');
            grd.addColorStop(1, 'white');
            ctx.fillStyle = grd;
            ctx.fillRect(10, 10, 150, 80);
        },
        getPagination() {
            console.log(hex_md5("123456r"));
            let c = document.getElementById('myCanvas');
            let ctx = c.getContext('2d');
            ctx.fillStyle = '#FF0000';
            ctx.fillRect(0, 0, 80, 100);
        }
    }
};
</script>

<style lang="less" module>
    #div1 {
        width: 350px;
        height: 70px;
        padding: 10px;
        border: 1px solid #a4da89;
    }
</style>

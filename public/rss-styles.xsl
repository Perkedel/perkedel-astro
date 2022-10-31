<!-- get feed base https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl -->
<!-- https://www.w3schools.com/xml/xsl_intro.asp -->
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html lang="en">
            <head>
                <!--https://www.w3schools.com/tags/tag_meta.asp-->
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width"/>
                <meta name="generator" content="astro-rss" />
                <meta name="theme-color" media="(prefers-color-scheme:dark)" content="#0000aa" />
                <meta name="description" content="(RSS) Free Technology News AND stuffs! | Perkedel NTLF+ASTR. Perkedel Technologies on Netflify with Astro framework"/>
                <meta name="keywords" content="tech, fun, novelty, open source, gratis, free, RSS"/>
                <meta name="author" content="JOELwindows7"/>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <!-- https://perkedel.netlify.app/assets/index.a862d9eb.css -->
                <link rel="stylesheet" href="https://perkedel.netlify.app/assets/index.a862d9eb.css"/>
                <script src="/main.js">
                    </script>
                <title>RSS | Perkedel Technologies Division NTLF+ASTR</title>
            </head>
            <body>
                <header>
                    <!-- <h1><PerkedelWoosie/><a href="/">Perkedel NTLF+ASTR</a></h1> -->
                    <!-- https://www.w3schools.com/tags/tag_hn.asp css of it pls -->
                    <p style="font-size: 2em; font-weight: bold;"><a href="/"><img src="/favicon.gif"/>Perkedel NTLF+ASTR</a></p>
                </header>
                <hr/>
                <nav>
                    <!-- <div class="addressBarYeah" style="display:none">
                        <p style="margin:0;">{Astro.url.href}</p>
                        <hr>
                    </div> -->
                    <ul>
                        <li class="NavPutLeft"><a title="Go back one level in address bar path" href="../" class="NavBtn" id="BackButton">&#xf053;</a></li>
                        <li class="NavPutLeft"><a title="Go home to root of this website" href="/" class="NavBtn" id="HomeButton" style="">🏠 Home &#xf015;</a></li>
                        <li class="NavPutLeft"><a title="Go to apps page, list of applications" href="/apps/" class="NavBtn" id="AppsButton" style="">📦 Applications &#xf53a;</a></li>
                        <!--<li class="NavPutLeft"><a title="Go back one level in address bar path" href="../" class="NavBtn" id="BackButton">&#xf049; BACK &#xf9d4;</a></li>-->
                        
                        <li class="NavPutRight dropdown">
                            <!-- <a class="dropbtn NavBtn" title="Open Menu">&#xea7c;</a> -->
                            <a class="dropbtn NavBtn" title="Open Menu">&#xf85b;</a>
                            
                            <ul class="dropdown-content">
                                <!-- <li><RefreshButton Classer="NavBtn"/></li> -->
                                <li><a title="Reload the page" class="NavBtn" href="javascript:window.location.href=window.location.href">🔄️ Refresh Page &#xf94f;</a></li>
                                <!-- <li><CopyToClipboardButton title="Copy current URL here right now to clipboard" say="Copy URL" toBeCopied={Astro.url.href}/></li> -->
                                <!-- <li><CopyURLToClipboardButton Classer="NavBtn" title="Copy current URL here right now to clipboard" say="Copy URL" toBeCopied={Astro.url.href}/></li> -->
                                <li><a title="Copy current URL here right now to clipboard" class="NavBtn" href='javascript:plsCopyTheURL()'>&#xf68e; Copy URL &#xf64c;</a></li>
                                <!-- <li><URLInfoButton Classer="NavBtn"/></li> -->
                                <li><a title="View URL info" class="NavBtn" href="javascript:URLInfoPls()">&#xf836; URL Info &#xf7fb;</a></li>
                                <!-- <li><a title="View this page source" href={viewSourceURL} class="NavBtn" id="ViewSourceButton" style="display:none;">🩻 View Source &#xf1c9;</a></li> -->
                                <!-- View source by button is forbidden by browsers of the world. WARM & BAD-->
                                <li><a title="Go view our RSS (link can by copy pasted to your newsreader)" href="/rss.xml" class="NavBtn" id="RSSButton" style="color:cyan;">📰 RSS &#xf143;</a></li>
                                <li><a title="Go read our Privacy Policy" href="/privacy_policy/" class="NavBtn" id="PrivacyPolicyButton" style="">📜 Privacy Policy &#xf069;</a></li>
                                <li><a title="Go read about us and our white paper stuffs" href="/about/" class="NavBtn" id="AboutButton" style="">📃 About &#xf05a;</a></li>
                            </ul>
                        </li>
                        <!-- <li class="NavPutRight"><a title="Go read our Privacy Policy" href="/privacy_policy" class="NavBtn">📜 Privacy Policy &#xf069;</a></li> -->
                        <!-- <li class="NavPutRight"><a title="Go read about us & our white paper stuffs" href="/about" class="NavBtn">📃 About &#xf05a;</a></li> -->
                        
                    </ul>
                </nav>
                <hr/>
                <main>
                    <h1>&#xf143; RSS for Perkedel NTLF+ASTR</h1>
                    <h2><xsl:value-of select="/rss/channel/title"/></h2>
                        <p><xsl:value-of select="/rss/channel/description"/></p>
                        <a>
                            <xsl:attribute name="title">
                                <xsl:value-of select="/rss/channel/image/title"/>
                            </xsl:attribute>
                            <xsl:attribute name="href">
                                <xsl:value-of select="/rss/channel/image/link"/>
                            </xsl:attribute>
                            <img width="40%">
                                <xsl:attribute name="src">
                                    <xsl:value-of select="/rss/channel/image/url"/>
                                </xsl:attribute>
                            </img>
                        </a>
                        <br/>
                        <a class="head_link Buttonnize">
                            <xsl:attribute name="href">
                                <xsl:value-of select="/rss/channel/link"/>
                            </xsl:attribute>
                            <!-- Visit Website Homepage &#x2192; -->
                            Visit Website Homepage &#xf061;&#xf015;
                        </a>
                        <br/>
                        <a href="https://perkedel.netlify.app/apps/rss" class="more_link Buttonnize">
                            More RSSes
                        </a>
                        <br/>
                        <a href="https://perkedel.netlify.app/rss.xml" class="subscribe_link Buttonnize">
                            <img width="36" height="14" src="https://www.w3schools.com/xml/pic_rss.gif"/> 
                            Subscribe, $0 (Copy this link and paste to your newsreader!)
                        </a>
                    <hr/>
                    <h2>Recent Items</h2>
                        <xsl:for-each select="/rss/channel/item">
                            <h3 class="mb-0">
                                <a target="_blank" rel="noopener noreferrer">
                                <xsl:attribute name="href">
                                    <xsl:value-of select="link"/>
                                </xsl:attribute>
                                <xsl:value-of select="title"/>
                                </a>
                            </h3>
                                <!-- <img width="30%">
                                    <xsl:attribute name="src">
                                        <xsl:value-of select="image/url"/>
                                    </xsl:attribute>
                                </img> -->
                                <p style="font-size:12px">in: <xsl:value-of select="category" /></p>
                                <p style="font-size:12px">by: <xsl:value-of select="author" /></p>
                                <!-- <p style="font-size:12px">lang: <xsl:value-of select="language" /></p> -->
                                <p><xsl:value-of select="description" /></p>
                                <p style="font-size:12px">Published: <xsl:value-of select="pubDate" /></p>
                                <p style="font-size:12px">comment: <xsl:value-of select="comment" /></p>
                                <p style="font-size:12px">sauce: <xsl:value-of select="source" /></p>
                                <p style="font-size:12px">GUID: <xsl:value-of select="guid" /></p>
                                <!-- <p style="font-size:12px"><xsl:value-of select="copyright" /></p> -->
                            <hr/>
                        </xsl:for-each>
                    <h2>Credits</h2>
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl">Base inspire of this style, from AboutFeed.</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/xml/xsl_intro.asp">How to XSLT. W3School</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/xml/xml_rss.asp">How to RSS. W3School</a></li>
                        </ul>
                </main>
                <footer>
                    <hr/>
                    <!-- <p title="(Static) Website compiled at datetime of..">&#xf5ef; <LocalTime date time/>, <TimeAgo micro datetime/></p> -->
                    <p><img alt="Perkedel Icon" width="50em" src="/Perkedel_Icon.png"/> <font size = "12">Perkedel Technologies</font></p>
                    <p>Powered by <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a> ft. <a href="https://astro.build" target="_blank" rel="noopener noreferrer">Astro</a></p>
                    <font size="2"><p>DISCLAIMER:</p> 
                    <ul>
                        <li><b>Netlify nor Astro never put watermark (except in context of domain for the Netflify free domain we had)</b>, I just write my own just to let you know how, yeah.</li>
                        <li>This website like many is stored on regular centralized system (GitHub for Source Code, Netflify for result), specifically static cloud type whatever Netflify or GitHub said. Therefore we do not endorse using such service other than for clout purpose<br/>With that of course, there is already as usual high risk of DMCA attacks and abuse. </li>
                    </ul>
                    <p>Content = CC4.0-BY-SA<br/>Website = GNU AGPLv3</p>
                    <a target="_blank" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a target="_blank" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
                    <br/>
                    <a target="_blank" rel="license" href="https://www.gnu.org/licenses/agpl-3.0.html"><img alt="GNU AGPL License" src="https://www.gnu.org/graphics/agplv3-with-text-162x68.png" width="100px"/></a>
                    </font>
                    <!-- <p>© Perkedel Technologies, Some Rights Reserved</p> -->
                    <p><xsl:value-of select="/rss/channel/copyright" /></p>
                </footer>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
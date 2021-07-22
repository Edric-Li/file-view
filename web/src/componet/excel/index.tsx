import React, {useEffect, useState} from "react";
import $ from 'jquery'
import _ from 'lodash';
import {Table} from 'antd';

import './index.css';

const html = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<html>
<head>
\t
\t<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
\t<title></title>
\t<meta name="generator" content="LibreOffice 7.1.4.2 (MacOSX)"/>
\t<meta name="author" content="BoXing Luan"/>
\t<meta name="created" content="2015-06-07T02:19:00"/>
\t<meta name="changedby" content="yuyan"/>
\t<meta name="changed" content="2021-07-22T10:07:47"/>
\t<meta name="KSOProductBuildVer" content="2052-3.6.1.5768"/>
\t
\t<style type="text/css">
\t\tbody,div,table,thead,tbody,tfoot,tr,th,td,p { font-family:"等线"; font-size:x-small }
\t\ta.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em;  } 
\t\ta.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em;  } 
\t\tcomment { display:none;  } 
\t</style>
\t
</head>

<body>
<hr>
\t<p><center>
\t\t<h1>Overview</h1>
\t\t<A HREF="#table0">A</A><br>
\t\t<A HREF="#table1">B</A><br>
\t\t
\t</center></p>
<hr>
<A NAME="table0"><h1>Sheet 1: <em>A</em></h1></A>
<table cellspacing="0" border="0">
\t<colgroup width="102"></colgroup>
\t<colgroup width="298"></colgroup>
\t<colgroup width="202"></colgroup>
\t<colgroup width="199"></colgroup>
\t<colgroup width="102"></colgroup>
\t<colgroup width="138"></colgroup>
\t<colgroup span="2" width="485"></colgroup>
\t<colgroup width="561"></colgroup>
\t<colgroup width="265"></colgroup>
\t<colgroup width="196"></colgroup>
\t<colgroup width="102"></colgroup>
\t<colgroup span="2" width="485"></colgroup>
\t<colgroup span="2" width="102"></colgroup>
\t<tr>
\t\t<td height="85" align="center" valign=middle><font color="#000000">序号</font></td>
\t\t<td align="left" valign=middle><font color="#000000">类别</font></td>
\t\t<td align="left" valign=middle><font color="#000000">功能模块</font></td>
\t\t<td align="left" valign=middle><font color="#000000">具体功能</font></td>
\t\t<td align="left" valign=middle><font color="#000000">状态</font></td>
\t\t<td align="left" valign=middle><font color="#000000">数据库</font></td>
\t\t<td align="left" valign=middle><font color="#000000">数据库表</font></td>
\t\t<td align="left" valign=middle><font color="#000000">数据库表</font></td>
\t\t<td align="left" valign=middle><font color="#000000">代码库</font></td>
\t\t<td align="left" valign=middle><font color="#000000">业务模块其他开发成员</font></td>
\t\t<td align="left" valign=middle><font color="#000000">备注</font></td>
\t\t<td align="left" valign=middle><font color="#000000">交接人</font></td>
\t\t<td align="left" valign=middle><font color="#000000">数据库表</font></td>
\t\t<td align="left" valign=middle><font color="#000000">数据库表</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="124" align="center" valign=middle sdval="1" sdnum="2052;"><font color="#000000">1</font></td>
\t\t<td align="left" valign=middle><font color="#000000">陕销党群通</font></td>
\t\t<td align="left" valign=middle><font color="#000000">爱心驿站</font></td>
\t\t<td rowspan=2 align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">已完成</font></td>
\t\t<td align="left" valign=middle><font color="#000000">holmium</font></td>
\t\t<td align="left" valign=middle><font color="#000000">loveannexs（爱心驿站附件表）<br>loveservices（爱心服务表）<br>lovestations（爱心驿站表）<br>loveservicetypes（爱心服务类型表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">loveannexs（爱心驿站附件表）<br>loveservices（爱心服务表）<br>lovestations（爱心驿站表）<br>loveservicetypes（爱心服务类型表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; LoveStations<br>后台：holmium =&gt; api =&gt; loveStations.js</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">王一鸣</font></td>
\t\t<td align="left" valign=middle><font color="#000000">loveannexs（爱心驿站附件表）<br>loveservices（爱心服务表）<br>lovestations（爱心驿站表）<br>loveservicetypes（爱心服务类型表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">loveannexs（爱心驿站附件表）<br>loveservices（爱心服务表）<br>lovestations（爱心驿站表）<br>loveservicetypes（爱心服务类型表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">loveannexs（爱心驿站附件表）<br>loveservices（爱心服务表）<br>lovestations（爱心驿站表）<br>loveservicetypes（爱心服务类型表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">loveannexs（爱心驿站附件表）<br>loveservices（爱心服务表）<br>lovestations（爱心驿站表）<br>loveservicetypes（爱心服务类型表）</font></td>
\t</tr>
\t<tr>
\t\t<td height="210" align="center" valign=middle sdval="2" sdnum="2052;"><font color="#000000">2</font></td>
\t\t<td align="left" valign=middle><font color="#000000">陕销党群通</font></td>
\t\t<td align="left" valign=middle><font color="#000000">政策研究</font></td>
\t\t<td align="left" valign=middle><font color="#000000">已完成</font></td>
\t\t<td align="left" valign=middle><font color="#000000">aladdin</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PolicyExperts（政研专家表）<br>PolicyFiles（附件表）<br>PolicyLogs（日志记录表）<br>PolicyMembers（成员表）<br>PolicyResults（政研成果表）<br>PolicyScores（政研成果得分表）<br>PolicyTypes（政研成果类型表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PolicyExperts（政研专家表）<br>PolicyFiles（附件表）<br>PolicyLogs（日志记录表）<br>PolicyMembers（成员表）<br>PolicyResults（政研成果表）<br>PolicyScores（政研成果得分表）<br>PolicyTypes（政研成果类型表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; policyResearch<br>后台：aladdin =&gt; service =&gt; PolicyResearchServices.ts</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">王一鸣</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PolicyExperts（政研专家表）<br>PolicyFiles（附件表）<br>PolicyLogs（日志记录表）<br>PolicyMembers（成员表）<br>PolicyResults（政研成果表）<br>PolicyScores（政研成果得分表）<br>PolicyTypes（政研成果类型表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PolicyExperts（政研专家表）<br>PolicyFiles（附件表）<br>PolicyLogs（日志记录表）<br>PolicyMembers（成员表）<br>PolicyResults（政研成果表）<br>PolicyScores（政研成果得分表）<br>PolicyTypes（政研成果类型表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PolicyExperts（政研专家表）<br>PolicyFiles（附件表）<br>PolicyLogs（日志记录表）<br>PolicyMembers（成员表）<br>PolicyResults（政研成果表）<br>PolicyScores（政研成果得分表）<br>PolicyTypes（政研成果类型表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PolicyExperts（政研专家表）<br>PolicyFiles（附件表）<br>PolicyLogs（日志记录表）<br>PolicyMembers（成员表）<br>PolicyResults（政研成果表）<br>PolicyScores（政研成果得分表）<br>PolicyTypes（政研成果类型表）</font></td>
\t</tr>
\t<tr>
\t\t<td height="123" align="center" valign=middle sdval="3" sdnum="2052;"><font color="#000000">3</font></td>
\t\t<td align="left" valign=middle><font color="#000000">陕销党群通</font></td>
\t\t<td align="left" valign=middle><font color="#000000">稿件管理（部分）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">稿件审核<br>我的稿件</font></td>
\t\t<td align="left" valign=middle><font color="#000000">已完成</font></td>
\t\t<td align="left" valign=middle><font color="#000000">aladdin</font></td>
\t\t<td align="left" valign=middle><font color="#000000">ManuscriptPublicationColumns（稿件类型表）<br>ManuscriptPublications（稿件发布表）<br>Manuscripts （稿件表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">ManuscriptPublicationColumns（稿件类型表）<br>ManuscriptPublications（稿件发布表）<br>Manuscripts （稿件表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; manuscriptManagement<br>后台：aladdin =&gt; service =&gt; ManuscriptServices.ts</font></td>
\t\t<td align="left" valign=middle><font color="#000000">姚响怡、马捷</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">姚响怡</font></td>
\t\t<td align="left" valign=middle><font color="#000000">ManuscriptPublicationColumns（稿件类型表）<br>ManuscriptPublications（稿件发布表）<br>Manuscripts （稿件表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">ManuscriptPublicationColumns（稿件类型表）<br>ManuscriptPublications（稿件发布表）<br>Manuscripts （稿件表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">ManuscriptPublicationColumns（稿件类型表）<br>ManuscriptPublications（稿件发布表）<br>Manuscripts （稿件表）</font></td>
\t\t<td align="left" valign=middle><font color="#000000">ManuscriptPublicationColumns（稿件类型表）<br>ManuscriptPublications（稿件发布表）<br>Manuscripts （稿件表）</font></td>
\t</tr>
\t<tr>
\t\t<td height="70" align="center" valign=middle sdval="4" sdnum="2052;"><font color="#000000">4</font></td>
\t\t<td align="left" valign=middle><font color="#000000">陕销党群通</font></td>
\t\t<td align="left" valign=middle><font color="#000000">党员学习手机端</font></td>
\t\t<td align="left" valign=middle><font color="#000000">手机端模块</font></td>
\t\t<td align="left" valign=middle><font color="#000000">已完成</font></td>
\t\t<td align="left" valign=middle><font color="#000000">holmium</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">手机端：dutch =&gt; pages =&gt; partyMemberLearning</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">王一鸣</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="25" align="center" valign=middle sdval="5" sdnum="2052;"><font color="#000000">5</font></td>
\t\t<td align="left" valign=middle><font color="#000000">陕销党群通</font></td>
\t\t<td align="left" valign=middle><font color="#000000">党建考核手机端</font></td>
\t\t<td align="left" valign=middle><font color="#000000">手机端模块</font></td>
\t\t<td align="left" valign=middle><font color="#000000">已完成</font></td>
\t\t<td align="left" valign=middle><font color="#000000">castle</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">手机端：dutch =&gt; pages =&gt; assessment</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">于衍</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="74" align="center" valign=middle sdval="6" sdnum="2052;"><font color="#000000">6</font></td>
\t\t<td align="left" valign=middle><font color="#000000">陕销党群通</font></td>
\t\t<td align="left" valign=middle><font color="#000000">专题研讨</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">已完成</font></td>
\t\t<td align="left" valign=middle><font color="#000000">holmium</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PartyMemberEducation</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PartyMemberEducation</font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; partyMemberEducation<br>后台：holmium =&gt; api =&gt;partyMemberEducations.js</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">于衍</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PartyMemberEducation</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PartyMemberEducation</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PartyMemberEducation</font></td>
\t\t<td align="left" valign=middle><font color="#000000">PartyMemberEducation</font></td>
\t</tr>
\t<tr>
\t\t<td height="49" align="center" valign=middle sdval="7" sdnum="2052;"><font color="#000000">7</font></td>
\t\t<td align="left" valign=middle><font color="#000000">陕销党群通</font></td>
\t\t<td align="left" valign=middle><font color="#000000">企业文化 下载功能</font></td>
\t\t<td align="left" valign=middle><font color="#000000">word文档下载功能</font></td>
\t\t<td align="left" valign=middle><font color="#000000">已完成</font></td>
\t\t<td align="left" valign=middle><font color="#000000">holmium</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; corporateCulture<br>后台：holmium =&gt; api =&gt; corporateCulture.js</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">于衍</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="25" align="center" valign=middle sdval="8" sdnum="2052;"><font color="#000000">8</font></td>
\t\t<td colspan=5 rowspan=5 align="left" valign=middle><font color="#000000">陕销党群通-统计报表<br>三会一课报表分析<br>统计<br>已完成<br>castle/merlin<br>爱心驿站报表分析<br>统计<br>已完成<br>holmium<br>政策研究报表分析<br>统计<br>已完成<br>aladdin<br>换届管理报表分析<br>统计<br>已完成<br>aladdin<br>在线调查报表分析<br>统计<br>已完成<br>survey</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; StatisticalReportForms =&gt; meetingReport</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">李秀亮</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="49" align="center" valign=middle sdval="9" sdnum="2052;"><font color="#000000">9</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; StatisticalReportForms =&gt; loveStationReport</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">王一鸣</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="25" align="center" valign=middle sdval="10" sdnum="2052;"><font color="#000000">10</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; StatisticalReportForms =&gt; policyResearch</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">王一鸣</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="49" align="center" valign=middle sdval="11" sdnum="2052;"><font color="#000000">11</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; StatisticalReportForms =&gt; termChangeManagement</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">姚响怡</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="49" align="center" valign=middle sdval="12" sdnum="2052;"><font color="#000000">12</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; StatisticalReportForms =&gt; onlineSurveyReport</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">于衍</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="24" align="center" valign=middle sdval="13" sdnum="2052;"><font color="#000000">13</font></td>
\t\t<td align="left" valign=middle><font color="#000000">陕销党群通</font></td>
\t\t<td align="left" valign=middle><font color="#000000">持证上岗</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">已由李盛宁接手</font></td>
\t\t<td align="left" valign=middle><font color="#000000">李盛宁</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="24" align="center" valign=middle sdval="14" sdnum="2052;"><font color="#000000">14</font></td>
\t\t<td align="left" valign=middle><font color="#000000">陕销党群通</font></td>
\t\t<td align="left" valign=middle><font color="#000000">待办工作</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">已重构</font></td>
\t\t<td align="left" valign=middle><font color="#000000">于衍</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="24" align="center" valign=middle sdval="15" sdnum="2052;"><font color="#000000">15</font></td>
\t\t<td align="left" valign=middle><font color="#000000">陕销党群通</font></td>
\t\t<td align="left" valign=middle><font color="#000000">维稳管理</font></td>
\t\t<td align="left" valign=middle><font color="#000000">页面搭建</font></td>
\t\t<td align="left" valign=middle><font color="#000000">已完成</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">李盛宁</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="337" align="center" valign=middle sdval="16" sdnum="2052;"><font color="#000000">16</font></td>
\t\t<td align="left" valign=middle><font color="#000000">加油站经理</font></td>
\t\t<td align="left" valign=middle><font color="#000000">分级分类</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">已完成</font></td>
\t\t<td align="left" valign=middle><font color="#000000">army</font></td>
\t\t<td colspan=2 align="center" valign=middle><font color="#000000">classificationindicatorvalues (指标值表)<br>classifictions (级别类别档别表)<br>branches (组织表)<br>meetingminutes (会议纪要表)<br>processControls (过程控制表)<br>approvalprocesses (审批程序表)<br>scoringRules (积分规则表)<br>classificationIndicatorrules (指标规则表)<br>classificationQuotarules（分配规则表）<br>subcategories (档别规则)<br>benchmarks (对标)</font></td>
\t\t<td align="left" valign=middle><font color="#000000">前端：web =&gt; army<br>后台：army</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">姚响怡</font></td>
\t\t<td align="left" valign=middle><font color="#000000">classificationindicatorvalues (指标值表)<br>classifictions (级别类别档别表)<br>branches (组织表)<br>meetingminutes (会议纪要表)<br>processControls (过程控制表)<br>approvalprocesses (审批程序表)<br>scoringRules (积分规则表)<br>classificationIndicatorrules (指标规则表)<br>classificationQuotarules（分配规则表）<br>subcategories (档别规则)<br>benchmarks (对标)</font></td>
\t\t<td align="left" valign=middle><font color="#000000">classificationindicatorvalues (指标值表)<br>classifictions (级别类别档别表)<br>branches (组织表)<br>meetingminutes (会议纪要表)<br>processControls (过程控制表)<br>approvalprocesses (审批程序表)<br>scoringRules (积分规则表)<br>classificationIndicatorrules (指标规则表)<br>classificationQuotarules（分配规则表）<br>subcategories (档别规则)<br>benchmarks (对标)</font></td>
\t\t<td align="left" valign=middle><font color="#000000">classificationindicatorvalues (指标值表)<br>classifictions (级别类别档别表)<br>branches (组织表)<br>meetingminutes (会议纪要表)<br>processControls (过程控制表)<br>approvalprocesses (审批程序表)<br>scoringRules (积分规则表)<br>classificationIndicatorrules (指标规则表)<br>classificationQuotarules（分配规则表）<br>subcategories (档别规则)<br>benchmarks (对标)</font></td>
\t\t<td align="left" valign=middle><font color="#000000">classificationindicatorvalues (指标值表)<br>classifictions (级别类别档别表)<br>branches (组织表)<br>meetingminutes (会议纪要表)<br>processControls (过程控制表)<br>approvalprocesses (审批程序表)<br>scoringRules (积分规则表)<br>classificationIndicatorrules (指标规则表)<br>classificationQuotarules（分配规则表）<br>subcategories (档别规则)<br>benchmarks (对标)</font></td>
\t</tr>
\t<tr>
\t\t<td height="112" align="center" valign=middle sdval="17" sdnum="2052;"><font color="#000000">17</font></td>
\t\t<td align="left" valign=middle><font color="#000000">竞争上岗手机端</font></td>
\t\t<td align="left" valign=middle><font color="#000000">投标模块</font></td>
\t\t<td align="left" valign=middle><font color="#000000">投标/展示界面搭建</font></td>
\t\t<td align="left" valign=middle><font color="#000000">已完成</font></td>
\t\t<td align="left" valign=middle><font color="#000000">dutch</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">手机端 dutch =&gt; jobBid</font></td>
\t\t<td align="left" valign=middle><font color="#000000">秀琴、李盛宁</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">李盛宁</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="130" align="center" valign=middle sdval="18" sdnum="2052;"><font color="#000000">18</font></td>
\t\t<td align="left" valign=middle><font color="#000000">服务器5012部署</font></td>
\t\t<td colspan=9 align="center" valign=middle><font color="#000000"><br>访问地址： http://210.12.193.79:5012/warrior<br>代码地址： /home/sysadm/testTroys/<br>启动命令：nohup node ./bin/www &amp;</font></td>
\t\t<td align="left" valign=middle><font color="#000000">李秀亮</font></td>
\t\t<td align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="127" align="center" valign=middle sdval="19" sdnum="2052;"><font color="#000000">19</font></td>
\t\t<td align="left" valign=middle><font color="#000000">端口转发</font></td>
\t\t<td colspan=9 align="center" valign=middle><font color="#000000">服务rinetd<br>配置文件：/etc/rinetd.conf</font></td>
\t\t<td align="left" valign=middle><font color="#000000">李秀亮</font></td>
\t\t<td align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">asf</font></td>
\t</tr>
\t<tr>
\t\t<td height="93" align="center" valign=middle sdval="20" sdnum="2052;"><font color="#000000">20</font></td>
\t\t<td align="left" valign=middle><font color="#000000">hw08服务器数据库备份脚本</font></td>
\t\t<td colspan=9 align="center" valign=middle><font color="#000000">/attendance/bin/attendance-backup.sh</font></td>
\t\t<td align="left" valign=middle><font color="#000000">李秀亮</font></td>
\t\t<td align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">asf</font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="152" align="center" valign=middle sdval="21" sdnum="2052;"><font color="#000000">21</font></td>
\t\t<td align="left" valign=middle><font color="#000000">本地视频流</font></td>
\t\t<td colspan=9 align="center" valign=middle><font color="#000000">已由秀琴接手</font></td>
\t\t<td align="left" valign=middle><font color="#000000">李秀亮</font></td>
\t\t<td align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
\t<tr>
\t\t<td height="89" align="center" valign=middle sdval="22" sdnum="2052;"><font color="#000000">22</font></td>
\t\t<td align="left" valign=middle><font color="#000000">考勤项目打包</font></td>
\t\t<td colspan=9 align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000">李秀亮</font></td>
\t\t<td align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="center" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t\t<td align="left" valign=middle><font color="#000000"><br></font></td>
\t</tr>
</table>
<!-- ************************************************************************** -->
<hr>
<A NAME="table1"><h1>Sheet 2: <em>B</em></h1></A>
<table cellspacing="0" border="0">
\t<colgroup width="104"></colgroup>
\t<tr>
\t\t<td height="24" align="left" valign=bottom><font color="#000000">aasfasf</font></td>
\t</tr>
</table>
<!-- ************************************************************************** -->
</body>

</html>

`

const Excel = () => {

    const [sheets, setSheets] = useState<string[]>([]);
    const [selectedTab, setSelectedTab] = useState(0);

    const renderTabs = () => {
        const renderTab = (name: string, index: number) => {
            return (
                <div
                    className='tab'
                    onClick={() => setSelectedTab(index)}
                >
                    {name}
                </div>)
        }

        return (
            <div className='tabs'>
                {sheets.map(renderTab)}
            </div>
        )
    }

    const renderTable = () => {

        const y = document.body.clientHeight - 40 - 52;
        const table = $('#html_container').find('table')[selectedTab]
        const tr_list = $(table).find('tr');
        const header_td_list = $(tr_list[0]).find('td');
        const header = _.map(header_td_list, td => td.innerText);

        const dataSource: any = []


        let max = 0;
        _.map(tr_list, tr => {
            const len = $(tr).find('td').length;
            if (len > max) {
                max = len;
            }
        })

        _.forEach(tr_list, (tr, index) => {
            if (!index) {
                return;
            }
            const obj: any = {};
            const td_list: any[] = _.map($(tr).find('td'));
            _.map(_.times(max), (index) => {
                const td = td_list[index] || {colSpan: 1};
                obj[index] = {
                    text: td.innerText,
                    rowSpan: td.rowSpan,
                    colSpan: td.colSpan
                };
            })
            dataSource.push(obj)
        })

        const columns: any[] = _.map(header, (text, index) => {
            return {
                title: text,
                dataIndex: index,
                key: index,
                render: (value: { text: string, rowSpan: number, colSpan: number }) => {
                    if (!value) {
                        return;
                    }
                    return {
                        children: (<div>{value?.text}</div>),
                        props: {
                            rowSpan: value.rowSpan || 0,
                            colSpan: value.colSpan || 0
                        }
                    }
                }
            }
        })


        return (
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                className='table'
                bordered={true}
            />
        )
    }

    useEffect(() => {
        const tables = $('#html_container').find('table');

        setSheets(_.map(tables, (value, index) => $(`a[name=table${index}]`)?.find('em')?.html() || `Sheet${Number(index) + 1}`))
    }, []);

    return (
        <div className='root'>
            <div dangerouslySetInnerHTML={{__html: html}} style={{display: 'none'}} id='html_container'/>
            {renderTable()}
            {renderTabs()}
        </div>
    )
}


export default Excel;

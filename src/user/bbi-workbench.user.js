// ==UserScript==
// @name         WorkBench Addon
//
// @include      https://workbench.developerforce.com/*
//
// @match        https://workbench.developerforce.com/*
//
// @version      0.1
// @author       baptiste.bieber@gmail.com
// @grant        none
// @namespace    *
// ==/UserScript==

var base_url = 'https://cdn.rawgit.com/baptistebieberacn/userscripts/b421b517fd7bd13dd0330f83e0b1145b7336ba5f/src'
var d = new Date();

var WorkbenchStyle = document.createElement('link');
WorkbenchStyle.href = base_url+'/css/bbi-workbench.css?v='+d.getTime();
WorkbenchStyle.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(WorkbenchStyle);

var JQueryScript = document.createElement('script');
JQueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
JQueryScript.type = 'text/javascript';
JQueryScript.async = false;
document.getElementsByTagName('head')[0].appendChild(JQueryScript);

var WorkbenchScript = document.createElement('script');
WorkbenchScript.src = base_url+'/js/bbi-workbench.js?v='+d.getTime();
WorkbenchScript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(WorkbenchScript);

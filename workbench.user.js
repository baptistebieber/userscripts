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

var d = new Date();

var WorkbenchStyle = document.createElement('link');
WorkbenchStyle.href = 'https://baptiste-bieber.fr/work/workbench_script.css?v='+d.getTime();
WorkbenchStyle.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(WorkbenchStyle);

var JQueryScript = document.createElement('script');
JQueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
JQueryScript.type = 'text/javascript';
JQueryScript.async = false;
document.getElementsByTagName('head')[0].appendChild(JQueryScript);

var WorkbenchScript = document.createElement('script');
WorkbenchScript.src = 'https://baptiste-bieber.fr/work/workbench_script.js?v='+d.getTime();
WorkbenchScript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(WorkbenchScript);

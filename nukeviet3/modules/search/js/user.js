function nv_send_search(c,d){nv_settimeout_disable("search_submit",1E3);var a=document.getElementById("search_query");if(a.value.length>=c&&a.value.length<=d){var b=formatStringAsUriComponent(a.value);a.value=b;if(b.length>=c&&b.length<=d){b=rawurlencode(b);var e=document.getElementById("search_query_mod").options[document.getElementById("search_query_mod").selectedIndex].value,f=document.getElementById("search_checkss").value;a=document.getElementById("search_logic_and");b=nv_siteroot+"index.php?"+
nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"="+nv_module_name+"&"+nv_fc_variable+"=adv&search_query="+b+"&search_mod="+e+"&search_ss="+f;if(a.checked==true)b+="&logic=AND";nv_ajax("get",b,"","search_result");return}}a.focus();return false}function nv_search_viewall(c,d,a){document.getElementById("search_query").value=document.getElementById("hidden_key").value;document.getElementById("search_query_mod").value=c;nv_send_search(d,a)}
function GoUrl(c,d){nv_settimeout_disable("search_submit",1E3);var a=document.getElementById("search_query_mod").options[document.getElementById("search_query_mod").selectedIndex].value;if(a=="all"){alert("Please choose the module!");document.getElementById("search_query_mod").focus();return false}a=nv_siteroot+"index.php?"+nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"="+a+"&"+nv_fc_variable+"=search";var b=document.getElementById("search_query");if(b.value.length>=c&&b.value.length<=d){b=
formatStringAsUriComponent(b.value);if(b.length>=c&&b.length<=d){b=rawurlencode(b);a=a+"&q="+b}}window.location.href=a;return false}
function GoGoogle(c,d){nv_settimeout_disable("search_submit",1E3);var a=document.getElementById("search_query");if(a.value.length>=c&&a.value.length<=d){var b=rawurlencode(a.value);a=rawurlencode(document.getElementById("mydomain").value);var e=document.getElementById("confirm_search_on_internet").value;b="http://www.google.com/custom?hl="+nv_sitelang+"&domains="+a+"&q="+b;confirm(e+" ?")||(b+="&sitesearch="+a);window.open(b,"_blank")}else{a.focus();return false}};
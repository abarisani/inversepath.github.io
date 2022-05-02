$(document).ready(function () {
  if (!sessionStorage.disclaimerShown) {
    showDisclaimer();
    sessionStorage.disclaimerShown = 'true';
  }
});

hideDisclaimer = function() {
  $('#disclaimer_popup').hide();
};

showDisclaimer = function() {
  $('#disclaimer_popup').append('<div id="fade">');
  $('#disclaimer_popup').append(`<div class="popup_block">
    <div class="popup">
      <a href="javascript:hideDisclaimer()"><img src="images/popup_close.png" class="close_button" title="Close" alt="Close" /></a>
      <b>Inverse Path is a registered trademark of F-Secure Corporation</b>
      <br/><br/>
      <b>Trieste office</b><br/>Via Mazzini 33, I-34121, Trieste - Italy
      <br/><br/>
      <b>F-Secure Corporation</b><br/>Tammasaarenkatu 7, FI-00181 Helsinki, Finland<br/>
      <b>Business ID</b><br/>Registered office Helsinki - 0705579-2<br/>
      <b>VAT Reg.</b><br/>FI07055792
      <br/><br/>
    </div>
  </div>`);

  $('#disclaimer_popup').show();
};

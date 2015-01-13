function popu(){
    var parentDiv=$('<div id="myModal" tabindex="-1" role="dialog" data-hasfoot="false" class="sui-modal hide fade"></div>');
    var dialog = $('<div class="modal-dialog"></div>');
    var content = $('<div class="modal-content"></div>');
    var header = $('<div class="modal-header"></div>');
    var closeBtn = $(' <button type="button" data-dismiss="modal" aria-hidden="true" class="sui-close"><img src="../../image/btn_close.png"></button>');
    var title = $(' <h4 id="myModalLabel" class="modal-title"></h4>');
    var body =$('<div class="modal-body"></div>');
    parentDiv.append(dialog);
    parentDiv.append(content);
    header.append(closeBtn).append(title);
    parentDiv.append(header);
    parentDiv.append(body);
}
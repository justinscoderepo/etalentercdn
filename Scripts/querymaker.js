
$("body").on("beforerequest", "[data-json]", function (e, post) {
    ////searchby[UserRole][NotEqualTo]

    post.filterby = [];
    post.orderby = [];
    post.orderbylist = [];
    post.searchby = [];
    for (var p in post) {
        if (post.hasOwnProperty(p) && p != "orderby" && p.split("orderfield").length > 1 && post[p] && post[p]!="undefined") {
          
            var orderindex;
            orderindex = p.replace("orderfield", "").replace("[", "").replace("]", "");
            var sortkey="sortorder";
            if(orderindex){
                sortkey="sortorder["+orderindex+"]";
            }

            post.orderby.push(
        { key: post[p], value: post[sortkey] }
            );
        }
            if (post.hasOwnProperty(p) && p != "filterby" && p.split("filterby").length > 1) {
                if (post[p]) {
                    post.filterby.push(
                { key: p.split("filterby")[1].replace("[", "").replace("]", ""), value: post[p] }
                    );
                }
            }
            if (post.hasOwnProperty(p) && p != "searchby" && p.split("searchby").length > 1) {

                var key = p.split("searchby")[1].split("]")[0].replace("[", "");
                var condition = p.split("searchby")[1].split("][")[1].replace("]", "");
                var first = [{ key: key, value: post[p], condition: condition }];
                post.searchby.push(
            first
                );
            }
        }


    });
    var handleformvalues = function (postdata, isarray,isnewrow) {

        var form = [];
        var filterby = [];
        for (var p in postdata.formdata) {
            var row = postdata.formdata[p];
            if (isarray) {
                if (postdata.formdata.hasOwnProperty(p) && p != "form" && p.split("form").length > 1) {

                    form.push(
                { key: p.split("form")[1].replace("[", "").replace("]", ""), value: row }
                    );
                } else
                    if (postdata.formdata.hasOwnProperty(p) && p != "filterby" && p.split("filterby").length > 1 && !isnewrow) {

                        filterby.push(
                    { key: p.split("filterby")[1].replace("[", "").replace("]", ""), value: row }
                        );
                    }
            } else {
                if (postdata.formdata.hasOwnProperty(p) && p != "form" && row.name.split("form").length > 1) {

                    form.push(
                { key: row.name.split("form")[1].replace("[", "").replace("]", ""), value: row.value }
                    );
                } else if (postdata.formdata.hasOwnProperty(p) && p != "filterby" && row.name.split("filterby").length > 1 && !isnewrow && row.name.toLowerCase().split("id").length == 1) {

                    filterby.push(
                { key: row.name.split("filterby")[1].replace("[", "").replace("]", ""), value: row.value }
                    );
                }
            }
        }
        postdata.formdata = {};
        postdata.formdata.form = form;
        postdata.formdata.filterby = filterby;
    };
$("body").on("beforesave", "form[data-save]", function (e, postdata) {
        handleformvalues(postdata);

    });
    $("body").on("beforesavetableform", "[data-jltableform]", function (e, postdata) {
        handleformvalues(postdata, true, postdata.newrowdata);

    });
    $("body").on("aftersave", "form[data-save]", function (e, postdata) {
        $(this).find("[type=reset]").trigger("click");
    });
    $("body").on("beforeinitialize", "[data-json]", function (e, data) {
        var t = $(this);
        var tid = t.attr("id");

        ////t.find("[data-key]").each(function () {
        ////    var choosecount=t.attr("data-choosecount") ? parseInt(t.attr("data-choosecount")) + 1 : 0;
        ////    t.attr("data-choosecount", choosecount);
        ////    var key = $(this).attr("data-key");
        ////    var id = 'choosevariablesof' + key + 'depend' + tid;
        ////    if ($("#" + id).length == 0) {
        ////        $("body").append('<input type="hidden" id="' + id + '" name="choose[' + choosecount + ']" value="' + key + '">');
        ////        if (!t.attr("data-filterby")) {
        ////            t.attr("data-filterby", "");
        ////        }
        ////        t.attr("data-filterby",
        ////            t.attr("data-filterby") +
        ////            (t.attr("data-filterby") ? "," : "") +
        ////            "#" + id );
        ////    }
        ////});





    });


$(document).ready(function () {
    function initilizeExcel() {
        var fields = [];
        let items = $('form[data-save="true"] .form-group,.table-addnewrow .form-group').not($('.tab-pane .form-group').not($('.tab-pane.active .form-group')));
        items.each(function (i, z) {
            let label = $(this).find("label").text().trim();
            let input = $(this).find("input,select,textarea").not("[type=hidden],.hidden");
            if (label&&input.length>0) {
                fields.push(label);
            }
        });
        //items=allowedItems;
        let dependelements = items.find('select[data-binderinit-click]');
        let idList = [];
        dependelements.each(function () {
            let id = $(this).attr('data-binderinit-click');
            if (idList.indexOf(id) == -1) {
                idList.push(id);
            }
        });

        function rendeheading(thead) {

            fields.forEach(function (x) {
                var th = $("<th class='datacolumn'></th>");               
                th.text(x);
                thead.append(th);
            });
        }

        function renderTable() {

            if ($(".pasteexcel table").length == 0) {
                $(".pasteexcel").prepend("<table class='table table-bordered divtable table-striped'><thead><tr></tr></thead><tbody></tbody></table>");
            }
            if ($(".pasteexcel thead").length == 0) {
                $(".pasteexcel table").prepend("<thead><tr></tr></thead>");
            }

            if ($(".pasteexcel thead tr th").length == 0) {
                rendeheading($(".pasteexcel thead tr"));
            }
            setcache("tableimport_" + window.location.pathname, $(".pasteexcel").html());

        }

        $(".uploaditems,.verifyexcel").hide();

        function renderInitialData() {
            if ($("#toggleExcelUpload:visible").length) {
                let joinedIdList = idList.join(',');
                $(joinedIdList).trigger('click');
                setTimeout(function () {
                    $(joinedIdList).trigger('click');
                }, 200);
                if (getcache("tableimport_" + window.location.pathname)) {
                    $(".pasteexcel").html(getcache("tableimport_" + window.location.pathname));
                } else {
                    renderTable()
                }
            }
        }

        renderInitialData();
        $('body').on("click",
            ".toggleExcelUpload",
            function (e) {
                setTimeout(function () {
                    renderInitialData();
                }, 200);
            });
        $('body').on("click",
            ".pasteexcel",
            function (e) {
                if ($(".pasteexcel").text()) {
                    //  $(".uploaditems").show();
                    $(".verifyexcel").show();
                    renderTable()

                }
            });

        function findMostMatchingItem(inputStr, items, depth = 0) {
           
            let maxSimilarity = parseInt($("#minSimilarity").val());
            let maxIndex = -1;
            for (let i = 0; i < items.length; i++) {
                let similarity = 0;
                if ( items[i].toLowerCase().indexOf(inputStr.toLowerCase()) !== -1) {
                    similarity += 5;
                }
                if (inputStr.toLowerCase().indexOf(items[i].toLowerCase()) !== -1) {
                    similarity += 5;
                }

                let inputWords = inputStr.split(' ');
                let itemWords = items[i].split(' ');               
                let inputIndex = 0;
                for (let j = 0; j < itemWords.length && inputIndex < inputWords.length; j++) {
                    if (itemWords[j].toLowerCase().indexOf(inputWords[inputIndex].toLowerCase()) !== -1) {
                        if (!isNaN(parseInt(itemWords[j])) && parseInt(itemWords[j]) === parseInt(inputWords[inputIndex])) {
                            similarity += 3;
                        } else {
                            similarity++;
                        }
                        inputIndex++;
                    }
                }

                itemWords = inputStr.split(' ');
                inputWords = items[i].split(' ');
                inputIndex = 0;
                for (let j = 0; j < itemWords.length && inputIndex < inputWords.length; j++) {
                    if (itemWords[j].toLowerCase().indexOf(inputWords[inputIndex].toLowerCase()) !== -1) {
                        if (!isNaN(parseInt(itemWords[j])) && parseInt(itemWords[j]) === parseInt(inputWords[inputIndex])) {
                            similarity += 3;
                        } else {
                            similarity++;
                        }
                        inputIndex++;
                    }
                }
                               
                
                if (similarity > maxSimilarity) { 
                    maxSimilarity = similarity;
                    maxIndex = i;
                }
            }
            const result = { maxIndex: maxIndex, item: items[maxIndex], similarity: maxSimilarity };

            // Check if depth limit has been reached
            if (depth >= 2) {
                return result;
            }
            
            let inputWords = inputStr.split(' ');
            // Reverse the input and items to check similarity in the other direction
            const reversedInputStr = inputWords.reverse().join(' ');
            const reversedItems = items.map(item => item.split(' ').reverse().join(' '));
            const reversedResult = findMostMatchingItem(reversedInputStr, reversedItems, depth + 1);

            // Merge the results to get the highest similarity from both directions
            if (reversedResult.similarity > result.similarity) {
                return { maxIndex: reversedResult.maxIndex, item: items[reversedResult.maxIndex], similarity: reversedResult.similarity };
            } else {
                return result;
            }
        }






        $('body').on("click",
            ".verifyexcel",
            async function (e) {

                if ($(".pasteexcel").text()) {
                    $(".verifyexcel").hide();
                    $(".uploaditems").show();
                    var postobject = {};
                    postobject.items = [];
                    $(".pasteexcel tbody tr").each(function () {
                        let tr = $(this);

                        $.each(items, function (i, v) {
                            let label = $(v).find("label").text().trim();
                            if (fields.indexOf(label) != -1) {
                                let item = items[i];
                                let itemobj = $(item);

                                let input = itemobj.find("input,select,textarea").not("[type=hidden],.hidden");
                                let tablecell = tr.find("td:eq(" + i + ")");
                                let value = tablecell.text().trim();


                                if (itemobj.find("select").length > 0 && tablecell.find("select").length == 0) {
                                    //try {
                                        let inputoptions = input.find("option").filter(function () {
                                            return ($(this).attr('value'))
                                        });
                                        let listOfOptions = [];
                                        inputoptions.each(function () {
                                            listOfOptions.push($(this).text()?.trim()?.toLowerCase());
                                        });
                                        const mostMatchingItem = findMostMatchingItem(value?.toLowerCase(), listOfOptions,0);
                                        let selectedOptionIndex = mostMatchingItem.maxIndex;

                                        let dropdownValue = input.val();
                                        if (selectedOptionIndex >= 0) {
                                            dropdownValue = $(inputoptions[selectedOptionIndex]).attr('value');
                                        }
                                        let copyofinputhtml = input.clone();
                                        tablecell.append(copyofinputhtml);
                                        tablecell.find('select').removeAttr("multiple");
                                    tablecell.find('select').attr("name",tablecell.find('select').attr("name").replace("List",""));
                                        tablecell.find('select').val(dropdownValue);

                                    // } catch (e) {
                                    //
                                    // }

                                }
                                else
                                    if (itemobj.find("input").length > 0 && tablecell.find("input").length == 0) {
                                        let copyofinputhtml = input.clone();
                                        tablecell.append(copyofinputhtml);
                                        tablecell.find('input').val(value);
                                        if (copyofinputhtml.attr("type") == "checkbox") {
                                            copyofinputhtml.prop("checked", value == "true" || value == "1");
                                        }
                                }
                            }
                        });

                    });

                }

            });


        $('body').on("click",
            ".uploaditems",
            async function (e) {
                debugger
                let form = items.first().closest("form");
                let jlform = items.first().closest("[data-jltableform]");
                let newRow= items.first().closest(".table-addnewrow");
                function sendItToServer(items, index) {
                    let chunk = 1;
                    let postobjectchunks = [];
                    postobjectchunks = postobject.items[index];
                    if (postobjectchunks) {
                        postobjectchunks.IsMultiple=false;
                        $.post(form.attr('action')||jlform.attr('data-action'),
                            postobjectchunks,
                            function (data) {
                                $(".pasteexcel tbody tr").first().remove();
                                sendItToServer(items, index + chunk);
                            });
                    } else {
                        if(form.attr("data-updatebinder")) {
                            $(form.attr("data-updatebinder")).binder();
                        }else {
                            form.binder();
                        }
                        alert("Imported all items");
                        hideabsolutespinner($("#toggleExcelUpload"));
                    }

                    setcache("tableimport_" + window.location.pathname, $(".pasteexcel").html());
                }


                if ($(".pasteexcel").text()) {
                    var postobject = {};
                    postobject.items = [];
                    $(".pasteexcel tbody tr").each(function (index) {
                        var item = $.fn.binder.methods.makepostdata(form.find("[name]").add(newRow.find("[name]")));
                        let isValid = true;

                        let arrayItems = fields;

                        arrayItems.forEach((x, i) => {
                            let itemInput = $(items[i]).find('select,input,textarea').not('[type=hidden],.hidden');
                            let selectInput=$(this).find("td:eq(" + i + ") select");
                            if (selectInput.length == 0) {
                                selectInput = $(this).find("td:eq(" + i + ") input");
                            }
                            
                            if (selectInput.length > 0) {
                                item[selectInput.attr('name')] = selectInput.val();
                            } else if ($(this).find("td:eq(" + i + ")").length > 0) {
                                item[selectInput.attr('name')] = $(this).find("td:eq(" + i + ")").text().trim();
                            }
                            
                            if (!item[selectInput.attr('name')]) {
                                isValid = false;
                            }
                        })


                        if (!isValid || fields.length == 0) {
                            alert("invalid Row " + $(this).index());
                           
                        } else {
                            postobject.items.push(item);
                        }


                    });
                    if (postobject.items.length > 0) {
                        showabsolutespinner($("#toggleExcelUpload"));
                        sendItToServer(postobject.items, 0);

                    } else {
                        alert("Paste proper Excel data to upload", false, false, false, "e");
                    }
                }

                $(".uploaditems,.verifyexcel").hide();
            });
    }

    if ($(".toggleExcelUpload:visible").length > 0) {
        initilizeExcel();
    }

    $('body').on("click", ".toggleExcelUpload", function (e) {
        if (!$(this).hasClass("initialized")) {
            $(this).addClass("initialized");
            initilizeExcel();
        }

    });

});
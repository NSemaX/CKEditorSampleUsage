<%@ Page Language="C#" AutoEventWireup="true" ValidateRequest="false" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>CK Editor sample</title>
    <link rel="stylesheet" runat="server" href="./CKEditor/skins/moono/editor.css" />
    <script type="text/javascript" src="./js/jsnew/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>

    <script type="text/javascript" src="./CKEditor/ckeditor.js"></script>
    <script type="text/javascript" src="./CKEditor/config.js"></script>
    <script type="text/javascript" src="./CKEditor/styles.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
         <asp:Label ID="Label1" Text="CK Editor Sample"  runat="server"></asp:Label>
        <br />
      <textarea runat="server" placeholder="Haber metnini girin." name="editor1" style="height: 700px" id="editor1" rows="10" cols="80">
            </textarea>
                        <script type="text/javascript">
                            // Replace the <textarea id="editor1"> with a CKEditor
                            // instance, using default configuration.
                            // CKEDITOR.replace('BodyContent_editor1');
                            CKEDITOR.replace('<%=editor1.ClientID %>',
                {
                    filebrowserBrowseUrl: '/ckfinder/ckfinder.html',
                    filebrowserImageBrowseUrl: './Upload.ashx/',
                    filebrowserFlashBrowseUrl: '/ckfinder/ckfinder.html?Type=Flash',
                    filebrowserUploadUrl: '/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files',
                    filebrowserImageUploadUrl: './Upload.ashx',
                    filebrowserFlashUploadUrl: '/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash',
                });
                        </script>
        <asp:Button runat="server" Text="Show Text" ID="show_text" OnClick="show_text_Click" />
          <asp:Label ID="lblNewsLong"  runat="server"></asp:Label>
    </div>
    </form>
</body>
</html>

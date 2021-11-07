<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {{assets_css "static/build/css/style.css"}}
    <link rel="shortcut icon" href="/static/img/logo-mibde.jpg" type="image/x-icon">
    <title>{{ block "headTitle" . }}{{ end }} | Mibde</title>
</head>

<body>
    {{template "layouts/partials/navbar.html"}}

    <main>
        {{ block "content" . }}{{ end }}
    </main>

    {{template "layouts/partials/footer.html"}}

</body>

</html>
var React = require('react');
class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description"></meta>
                    <meta name="author"></meta>
                    <link rel="stylesheet" href="/stylesheets/css/bootstrap.css"/>
                    <link rel="stylesheet" href="/stylesheets/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/stylesheets/all.min.css"/>
                    <link href="/googleapis/Montserrat.css" rel="stylesheet" />
                    <link href="/googleapis/Kaushan.css" rel="stylesheet" />
                    <link href="/googleapis/Droid-Serif.css" rel="stylesheet" />
                    <link href="/googleapis/Roboto-Slab.css" rel="stylesheet" />
                    <link rel="stylesheet" href="/stylesheets/agency.min.css"/>
                    <link rel="stylesheet" href="/stylesheets/style.css"/>
                    <link rel="stylesheet" href="/stylesheets/admin.css"/>
                    <script src="/javascripts/jquery/jquery.min.js"></script>
                    <script src="/javascripts/js/bootstrap.bundle.min.js"></script>
                    {/*<script src="/javascript/jquery-easing/iquery.easing.min.js"/>*/}
                    <script src="/javascripts/js/jqBootstrapValidation.js"/>
                    <script src="/javascripts/js/contact_me.js"/>
                    <script src="/javascripts/babel/babel.min.js"/>
                    <link rel="stylesheet" href="/stylesheets/font-awesome.min.css"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"/>
                </head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    {this.props.children} 
                </body>
            </html>
        );
    }
}
module.exports = DefaultLayout;
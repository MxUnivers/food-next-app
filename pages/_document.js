import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Insérez les balises <link> ici */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet" />

          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

          <link href="/static/lib/animate/animate.min.css" rel="stylesheet" />
          <link href="/static/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
          <link href="/static/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

          <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/static/css/style.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
          <script src="/static/lib/wow/wow.min.js"></script>
          <script src="/static/lib/easing/easing.min.js"></script>
          <script src="/static/lib/waypoints/waypoints.min.js"></script>
          <script src="/static/lib/counterup/counterup.min.js"></script>
          <script src="/static/lib/owlcarousel/owl.carousel.min.js"></script>
          <script src="/static/lib/tempusdominus/js/moment.min.js"></script>
          <script src="/static/lib/tempusdominus/js/moment-timezone.min.js"></script>
          <script src="/static/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

          <script src="/static/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

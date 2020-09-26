import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { resetServerContext } from 'react-beautiful-dnd';

/**
 * Implement Next.js custom Document to invoke resetServerContext() from
 * react-beautiful-dnd (required for SSR and proper static exporting)
 */
class SecretSantaDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    resetServerContext();
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SecretSantaDocument;

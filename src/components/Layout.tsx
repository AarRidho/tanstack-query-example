import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      <style jsx global>{`
        * {
          font-family:
            Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
            'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
            monospace, serif;
        }
        body {
          margin: 0;
          padding: 25px 50px;
        }
        a:not([type="button"]) {
          color: #22bad9;
        }
        p {
          font-size: 14px;
          line-height: 24px;
        }
        article {
          margin: 0 auto;
          max-width: 650px;
        }
        a[type="button"],
        button {
          font-size: 13.3333px;
          align-items: center;
          background-color: #22bad9;
          border: 0;
          color: white;
          display: flex;
          padding: 5px 7px;
          transition: background-color 0.3s;
          text-decoration: none;
        }
        a[type="button"]:active,
        button:active {
          background-color: #1b9db7;
        }
        a[type="button"]:disabled,
        button:disabled {
          background-color: #b5bebf;
        }
        a[type="button"]:focus,
        button:focus {
          outline: none;
        }
      `}</style>
    </main>
  )
}

const PageNoFound = (): JSX.Element => (
  <div className="page-404">
    <section className="block-404">
      <h2 className="catalog__title visually-hidden">404</h2>

      <p className="block-404__msg">
        Page not found.
        <br />
        <br />
        <a href="/">Main page</a>
      </p>

    </section>

    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2024 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export { PageNoFound };

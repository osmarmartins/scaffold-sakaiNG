export class Paginacao {

  page = 0;
  size = 5;
  sort = '';

  getQueryParams() {
    const url = Object.keys(this).reduce( (acc, x) => {
      return acc += this[x] !== null ? `${encodeURIComponent(x)}=${encodeURIComponent(this[x])}&` : '';
    }, '?');
    return url;
  }

}

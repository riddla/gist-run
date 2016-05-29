import {inject} from 'aurelia-framework';
import {QueryString} from '../editing/query-string';

@inject(QueryString)
export class UnsupportedBrowser {
  constructor(queryString) {
    this.queryString = queryString;
  }

  activate() {
    return this.queryString.read()
      .then(gist => {
        this.gistUrl = gist.html_url;
      });
  }
}

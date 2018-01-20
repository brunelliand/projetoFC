import swal from "sweetalert2";

export default class AbstractCrudService {
  constructor($http, url) {
    this._http = $http;
    this._url = url;
  }

  findAll(url) {
    var getUrl;
    if (url) {
      getUrl = url;
    } else {
      getUrl = this._url;
    }
    return this._http.get(getUrl).then(response => response.data);
  }

  findById(id, url) {
    var getUrl;
    if (url) {
      getUrl = url;
    } else {
      getUrl = this._url;
    }
    return this._http.get(`${getUrl}/${id}`).then(response => response.data);
  }

  save(record) {
    console.log("Salvando...");
    console.log(`Url:${this._url}`);
    console.log(record);
    if (record.id) {
      return this._http.put(`${this._url}/${record.id}`, record);
    } else {
      return this._http.post(this._url, record);
    }
  }

  remove(id) {
    return swal({
      title: "Remover registro",
      text: "Deseja realmente remover o registro",
      type: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Sim!",
      cancelButtonText: "Não obrigado"
    }).then(resp => {
      return resp.value
        ? this._http.delete(`${this._url}/${id}`)
        : Promise.reject({ type: "warning", message: "Operação cancelada!!!" });
    });
  }
}

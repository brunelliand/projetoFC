import swal from 'sweetalert2'

export default class AbstractCrudService {
  
  constructor($http, url) {
    this._http = $http
    this._url = url
  }

  findAll() {
    return this._http.get(this._url)
      .then(response => response.data)
  }

  findById(id) {
    return this._http.get(`${this._url}/${id}`)
      .then(response => response.data)
  }

  save(record) {
    console.log(record);
    if (record.id) {
      return this._http.put(`${this._url}/${record.id}`, record)
    } else {
      return this._http.post(this._url, record)
    }
  }

  remove(id) {
    return swal({
      title: 'Remover registro',
      text: 'Deseja realmente remover o registro',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Claro!',
      cancelButtonText: 'Não obrigado'
    }).then(resp => {
      return resp.value ? 
        this._http.delete(`${this._url}/${id}`) :
        Promise.reject({type: 'warning', message: 'Operação cancelada!!!'})
    })
  }

}

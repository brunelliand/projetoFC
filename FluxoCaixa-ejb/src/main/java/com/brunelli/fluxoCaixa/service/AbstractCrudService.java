package com.brunelli.fluxoCaixa.service;

import com.brunelli.fluxoCaixa.model.Entidade;
import com.brunelli.fluxoCaixa.util.GenericDao;
import java.util.List;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.validation.Valid;

public abstract class AbstractCrudService<T extends Entidade> {
    
       
    public List<T> findAll(Integer pageSize, Integer pageNumber, String filterField, String filterData, String order) {
        return getDao().findAll(pageSize, pageNumber, filterField, filterData, order);
    }
    
    public T findById(Long id) {
        return getDao().find(id);
    }
    
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public T insert(@Valid T bean) {
        return getDao().insert(bean);
    }
    
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public T update(@Valid T bean) {
        return getDao().update(bean);
    }
    
    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public void remove(Long id) {
        getDao().delete(id);
    }
    
    protected abstract GenericDao<T> getDao();
}

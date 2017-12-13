package com.brunelli.fluxoCaixa.service;

import com.brunelli.fluxoCaixa.model.Pedido;
import com.brunelli.fluxoCaixa.util.GenericDao;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.inject.Inject;

@Stateless
@TransactionAttribute(TransactionAttributeType.SUPPORTS)
public class PedidoService extends AbstractCrudService<Pedido> {

    @Inject
    private GenericDao<Pedido> dao;
    
    @Override
    protected GenericDao<Pedido> getDao() {
        return dao;
    }
    
}

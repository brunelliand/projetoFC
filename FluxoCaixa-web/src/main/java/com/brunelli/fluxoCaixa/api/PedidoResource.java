package com.brunelli.fluxoCaixa.api;

import com.brunelli.fluxoCaixa.model.Pedido;
import com.brunelli.fluxoCaixa.service.AbstractCrudService;
import com.brunelli.fluxoCaixa.service.PedidoService;
import javax.inject.Inject;
import javax.ws.rs.Path;

@Path("pedidos")
public class PedidoResource extends AbstractCrudResource<Pedido> {

    @Inject
    private PedidoService service;

    @Override
    protected AbstractCrudService<Pedido> getService() {
        return service;
    }
    
}

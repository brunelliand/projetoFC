package com.brunelli.fluxoCaixa.api;

import com.brunelli.fluxoCaixa.model.Produto;
import com.brunelli.fluxoCaixa.service.AbstractCrudService;
import com.brunelli.fluxoCaixa.service.ProdutoService;
import javax.inject.Inject;
import javax.ws.rs.Path;

@Path("produtos")
public class ProdutoResource extends AbstractCrudResource<Produto> {
    
    @Inject
    private ProdutoService service;
    
    @Override
    protected AbstractCrudService<Produto> getService() {
        return service;
    }
    
}

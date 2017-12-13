package com.brunelli.fluxoCaixa.util;

import com.brunelli.fluxoCaixa.model.Entidade;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author andre.brunelli
 * @param <T>
 */
public class GenericDao<T extends Entidade> {

    private final EntityManager em;
    private final Class<T> type;

    public GenericDao(EntityManager em, Class<T> type) {
        this.em = em;
        this.type = type;
    }

    public T insert(T bean) {
        em.persist(bean);
        return bean;
    }

    public T update(T bean) {
        return em.merge(bean);
    }

    public void delete(Long id) {
        T bean = em.getReference(type, id);
        em.remove(bean);
    }

    public List<T> findAll(Integer pageSize, Integer pageNumber) {
        return this.findAll(pageSize, pageNumber, null, null, null);
    }

    public List<T> findAll(Integer pageSize, Integer pageNumber, String filterField, String filterData) {
        return this.findAll(pageSize, pageNumber, filterField, filterData, null);
    }

    public List<T> findAll(Integer pageSize, Integer pageNumber, String filterField, String filterData, String order) {
        JpaCriteriaHelper helper = JpaCriteriaHelper.select(em, type)
                .setPageSize(pageSize)
                .page(pageNumber);
        if (filterField != null && filterData != null) {
            helper.where(filterField, JpaCriteriaHelper.ComparatorOperator.LIKE_IGNORE_CASE, filterData);
        }
        if (order != null) {
            String[] parts = order.split("\\+");
            helper.orderBy(parts[0]);
            if (parts.length > 1 && parts[1].equalsIgnoreCase("desc")) {
                helper.desc();
            }
        }
        return helper.getResults();
    }

    public T find(Long id) {
        return em.find(type, id);
    }

}

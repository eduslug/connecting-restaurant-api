import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import api from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { IPaginacao } from '../../interfaces/IPaginacao';

const ListaRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [nextPage, setPage] = useState('');

  useEffect(() => {
    api.get<IPaginacao<IRestaurante>>('/restaurantes/')
      .then(resp => {
        setRestaurantes(resp.data.results)
        console.log(resp)
        setPage(resp.data.next)
      })

  }, []);

  const verMais = () => {
    api.get<IPaginacao<IRestaurante>>(nextPage)
      .then(resp => {
        setRestaurantes([...restaurantes, ...resp.data.results]);
        setPage(resp.data.next);
      })
  }

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
    {nextPage && <button onClick={verMais} > Veja Mais</button>}
  </section>)
}

export default ListaRestaurantes
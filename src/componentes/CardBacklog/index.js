import React from 'react';
import { useDrag } from 'react-dnd';

import { Container, Label } from './styles';

export default function CardBacklog({ data, index, listIndex}) {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex, data },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

   return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
        <span id="ocorrencia">{`Cod. Ocorrencia: ${data.ocorrencia}`}</span>
      </header>
      <h3>{data.titulo}</h3>
      <p className="conteudo">{data.content}</p>
      { data.user && <img src={data.user} alt="Avatar"/> }      
    </Container>
  );
}
import { Box, makeStyles, Typography } from '@mui/material';
import React from 'react';
import './AboutBlock.css';

export const AboutBlock = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Box className={'AboutBlock__container'} display='flex' width='100%' maxWidth='1000px'>
        <Box className="AboutBlock__container_img" width='100%' margin='10px'>
          <img
            className='AboutBlock__img'
            style={{
              display: 'flex',

              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top'
            }}
            src='/about/1.jpeg'
          />
        </Box>
        <Box className="AboutBlock_text" marginTop='10px' marginLeft='30px'>
          <Typography sx={{ fontSize: '20px' }}>
            &emsp;Михаил Яковлевич Цымбалюк 1945г. <br></br>
            <pre></pre> &emsp; С раннего детства Михаил Яковлевич отличался особым интересом к
            живописи и любовью к математике. После школы поступил в Московский государственный
            университет на факультет мехмата, закончил его, чуть позже защитил десегрегацию.
            <br></br>&emsp; Долгое время работал на кафедре кафедре АСУ в Московском Текстильном
            институте, ныне Текстильной Академии, где с большим удовольствием занимался
            преподавательской деятельностью.
            <br></br>&emsp;В сложные 90-е судьба забросила в сферу бизнеса, он состоялся как
            руководитель бизнеса и с полной отдачей работал в сфере компьютеризации ГАИ г. Москвы.
            <br></br>&emsp;Увлеченность же живописью, пронес через все эти годы и в попоследнее
            время, когда появилась возможность, вернулся к идее живописания. Уверенно, настойчиво и
            гармонично реализуя давнюю мечту.
            <br></br>&emsp;Радует друзей и близких своим творчеством. В сборнике картин можно
            уловить тонкий баланс в сочетании поиска новых решений и верности традиционному стилю.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

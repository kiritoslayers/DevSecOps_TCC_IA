import React from 'react';
import { useState } from 'react';

import { Status } from '@common/types';
import { SkeletonLayout } from '@components';
import { Box, Button, Input } from '@components';
import { fetchDevOpsStep } from '@services/gpt';

export const ReleaseScreen: React.FC = () => {
  const [techValue, setTechValue] = useState('');
  const [dataBaseValue, setDataBaseValue] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const inputs = [techValue, dataBaseValue];

  const handleFetchGPTRelease = () => {
    setStatus('pending');

    fetchDevOpsStep('release', techValue, dataBaseValue)
      .then((res) => {
        setStatus('succeeded');
        setGptResponse(res.data.content);
      })
      .catch(() => setStatus('failed'));
  };

  return (
    <SkeletonLayout
      drawerFocus="release"
      title="Etapa - RELEASE"
      subtitle="Nesta etapa do ciclo de DevSecOps, abordaremos formas seguras junto a boas práticas para realizar o deploy da sua aplicação, utilizando a linguagem de programação e o banco de dados do seu projeto."
      responseIntro={`Planejamento de um pentest para uma aplicação utilizando "${techValue}" e "${dataBaseValue}":`}
      gptResponse={gptResponse}
      status={status}
    >
      <Box flexDirection="row" gap="18px">
        <Input
          value={techValue}
          onChange={(e) => setTechValue(e.target.value)}
          fullWidth
          label="Linguagem de programação"
        />
        <Input
          value={dataBaseValue}
          onChange={(e) => setDataBaseValue(e.target.value)}
          fullWidth
          label="Banco de dados"
        />
      </Box>
      <Button
        text={status === 'pending' ? 'Carregando...' : 'Confirmar'}
        disabled={
          status === 'succeeded' ||
          status === 'pending' ||
          inputs.some((input) => input === '')
        }
        onClick={handleFetchGPTRelease}
      />
    </SkeletonLayout>
  );
};

import { Modal } from 'antd';
import React, { useState } from 'react';

const useModal = (content: any, options: any = {}) => {
  const { width = 450, defaultVisible = false, ...rest } = options;
  const [visible, setVisible] = useState(defaultVisible);

  const modal = (
    <Modal
      visible={visible}
      onCancel={() => setVisible(false)}
      width={width}
      {...rest}
    >
      {content}
    </Modal>
  );

  return {
    modal,
    setVisible: setVisible,
    toggle: () => setVisible(!visible),
    visible,
  };
};

export { useModal };

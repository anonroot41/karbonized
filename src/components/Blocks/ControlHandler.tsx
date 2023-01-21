import React from 'react';
import { ArrowBlock } from './ArrowBlock';
import { AvatarBlock } from './AvatarBlock';
import { FaIconBlock } from './FaIconBlock';
import { ImageBlock } from './ImageBlock';
import { QrControl } from './QrBlock';
import { TextControl } from './TextBlock';
import { WindowBlock } from './WindowBlock';

const CodeControl = React.lazy(() => import('./CodeBlock'));

interface Props {
	id: string;
	type: string;
}

export const ControlHandler: React.FC<Props> = ({ type, id }) => {
	// Store Actions
	switch (type) {
		case 'code':
			return <CodeControl></CodeControl>;
		case 'text':
			return <TextControl></TextControl>;
		case 'qr':
			return <QrControl></QrControl>;
		case 'image':
			return <ImageBlock></ImageBlock>;
		case 'window':
			return <WindowBlock></WindowBlock>;
		case 'avatar':
			return <AvatarBlock></AvatarBlock>;
		case 'arrow':
			return <ArrowBlock></ArrowBlock>;
		case 'faicon':
			return <FaIconBlock></FaIconBlock>;
		default:
			return <></>;
	}
};

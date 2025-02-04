import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React, { JSX } from 'react';

type BlockProps = {
  block: BlockObjectResponse;
};

const Text = ({ text }: any) => {
  if (!text) return null;

  return text.map((value: any, i: number) => {
    const {
      annotations: { bold, code, italic, strikethrough, underline },
      text,
    } = value;

    if (!text?.content) return null;

    const classNames = [
      bold ? 'font-bold' : '',
      code ? 'font-mono bg-gray-100 rounded px-1' : '',
      italic ? 'italic' : '',
      strikethrough ? 'line-through' : '',
      underline ? 'underline' : '',
    ].filter(Boolean).join(' ');

    return (
      <span key={i} className={classNames || undefined}>
        {text.link ? (
          <a href={text.link.url} className="text-blue-600 hover:underline">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

const BlockRenderer = ({ block }: BlockProps) => {
  const { type } = block;

  switch (type) {
    case 'paragraph':
      return (
        <p className="my-4 leading-relaxed">
          <Text text={block.paragraph.rich_text} />
        </p>
      );

    case 'heading_1':
      return (
        <h1 className="text-3xl font-medium mt-8 mb-4">
          <Text text={block.heading_1.rich_text} />
        </h1>
      );

    case 'heading_2':
      return (
        <h2 className="text-2xl font-medium mt-6 mb-3">
          <Text text={block.heading_2.rich_text} />
        </h2>
      );

    case 'heading_3':
      return (
        <h3 className="text-xl font-medium mt-4 mb-2">
          <Text text={block.heading_3.rich_text} />
        </h3>
      );

    case 'bulleted_list_item':
      return (
        <li className="ml-6 list-disc">
          <Text text={block.bulleted_list_item.rich_text} />
        </li>
      );

    case 'numbered_list_item':
      return (
        <li className="ml-6 list-decimal">
          <Text text={block.numbered_list_item.rich_text} />
        </li>
      );

    case 'code':
      return (
        <pre className="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
          <code>
            <Text text={block.code.rich_text} />
          </code>
        </pre>
      );

    case 'quote':
      return (
        <blockquote className="border-l-4 border-gray-300 pl-4 my-4">
          <Text text={block.quote.rich_text} />
        </blockquote>
      );

    case 'image':
      const imageUrl = 
        block.image.type === 'external' 
          ? block.image.external.url
          : block.image.file.url;
      
      return (
        <figure className="my-4">
          <img
            src={imageUrl}
            alt={block.image.caption?.[0]?.plain_text || 'Notion image'}
            className="rounded-lg"
          />
          {block.image.caption && (
            <figcaption className="text-center text-gray-500 mt-2">
              <Text text={block.image.caption} />
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
};

interface NotionPageProps {
  blocks: BlockObjectResponse[];
}

const NotionPage: React.FC<NotionPageProps> = ({ blocks }) => {
  // Group consecutive list items together
  const content = blocks.reduce((acc: JSX.Element[], block: BlockObjectResponse, i: number) => {
    if (
      block.type === 'bulleted_list_item' &&
      blocks[i - 1]?.type === 'bulleted_list_item'
    ) {
      const lastElement = acc[acc.length - 1];
      if (lastElement.type === 'ul') {
        lastElement.props.children.push(<BlockRenderer key={block.id} block={block} />);
        return acc;
      }
    }

    if (
      block.type === 'numbered_list_item' &&
      blocks[i - 1]?.type === 'numbered_list_item'
    ) {
      const lastElement = acc[acc.length - 1];
      if (lastElement.type === 'ol') {
        lastElement.props.children.push(<BlockRenderer key={block.id} block={block} />);
        return acc;
      }
    }

    if (block.type === 'bulleted_list_item') {
      acc.push(<ul key={`ul-${block.id}`} className="my-4">{[<BlockRenderer key={block.id} block={block} />]}</ul>);
    } else if (block.type === 'numbered_list_item') {
      acc.push(<ol key={`ol-${block.id}`} className="my-4">{[<BlockRenderer key={block.id} block={block} />]}</ol>);
    } else {
      acc.push(<BlockRenderer key={block.id} block={block} />);
    }

    return acc;
  }, []);

  return <article className="max-w-4xl mx-auto">{content}</article>;
};

export default NotionPage;
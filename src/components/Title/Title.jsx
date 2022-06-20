export default function Title ({ title, children, level, ...props }) {
    const TitleLevel = level || 'h1';
     
    return (
        <TitleLevel {...props}>{ title || children }</TitleLevel>
    );
}


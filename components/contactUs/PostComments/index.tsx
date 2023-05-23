import { Container } from '@/components/ui/container';
import { RightIcon } from '@/public/assets/svges/RightArrowIconBlue';
import { AnounimeIcon } from '@/public/assets/svges/AnounimeIcon';
import Image from 'next/image';
import classes from './index.module.css';

const PostComments = () => {
    const posts = [{
        name: 'Katherine Brown',
        comment: 'After landing on your site, I will say its a pretty good site. Katherine',
        date: 'FEBRUARY 27, 2019',
        image: '',
    }, {
        name: 'Katherine Brown',
        comment: 'After landing on your site, I will say its a pretty good site. Katherine',
        date: 'FEBRUARY 27, 2019',
        image: '',
    }];
   
    return (
        <section className={classes.section}>
            <Container>
                <div className={classes.content}>
                    <h1 className={classes.title}>
                        <RightIcon />
                        THIS POST HAS ONE COMMENT
                    </h1>
                    { posts.map((post, index) => (
                        <div className={classes.post} key={index}>
                            <div className={classes.topLine}>
                                <div className={classes.nameWrapper}>
                                    { post?.image ? (
                                        <Image
                                            alt="user Image"
                                            src={post.image}
                                            width={29}
                                            height={29}
                                        />
                                    ) : <AnounimeIcon /> }
                                    <p className={classes.name}>{post.name}</p>
                                </div>
                                <p className={classes.date}>{post.date}</p>
                            </div>
                            <p className={classes.comment}>{post.comment}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { PostComments };
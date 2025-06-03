import { ExtraResourceCard } from './ExtraResourceCard';
import { PostFormCard } from './PostFormCard';

export function NewPostForm() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <PostFormCard />
      </div>
      <div>
        <ExtraResourceCard />
      </div>
    </div>
  );
}

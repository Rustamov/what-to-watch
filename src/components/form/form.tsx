import type { ChangeEvent } from 'react';

import { Fragment, useState } from 'react';

import { STARS_COUNT } from '../../const';

const Form = () => {
  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number | null>(null);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  return (
    <form className="add-review__form" action="#" method="post">
      <div className="rating">
        <div className="rating__stars">
          {Array.from({ length: STARS_COUNT }, (_, i) => (
            <Fragment key={`Star ${STARS_COUNT - i}`}>
              <input
                className="rating__input"
                name="rating"
                defaultValue={STARS_COUNT - i}
                id={`star-${STARS_COUNT - i}`}
                type="radio"
                checked={STARS_COUNT - i === rating}
                onChange={handleInputChange}
              />
              <label
                htmlFor={`star-${STARS_COUNT - i}`}
                className="rating__label"
              >
                Rating
                {STARS_COUNT - i}
              </label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          id="review-text"
          name="review-text"
          placeholder="Review text"
          value={text}
          onChange={handleTextareaChange}
        />

        <div className="reviews__button-wrapper">
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;

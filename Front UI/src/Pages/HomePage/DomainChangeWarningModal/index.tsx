import * as S from './styles';
import { useState } from 'react';

const OLD_DOMAIN = 'elpatodraw.com';

export const DomainChangeWarningModal = () => {
  const [hasConfirmed, setHasConfirmed] = useState(false);
  
  if (location.hostname != OLD_DOMAIN) return null;

  return (
    <S.Container>

      <div>
        <p>👋<b>Hey there,</b></p>

        <p>
        You are using our old domain. We are moving to
        </p>

        <p>
          <em>
            https://draw.elpato.dev
          </em>
        </p>

        <p>Please update any bookmarks in your browser as this url will stop working.</p>
        <p>Don&apos;t worry you won&apos;t lose any of your data.</p>

        <div>
          <input 
            id='old-domain-confirmation-checkbox'
            checked={hasConfirmed} 
            onChange={(e) => setHasConfirmed(e.target.checked)} 
            type='checkbox'
          />

          <label
            htmlFor='old-domain-confirmation-checkbox'
          >
            👍 I have updated my bookmarks
          </label>
        </div>

        <button 
          onClick={() => { location.replace('https://draw.elpato.dev'); }}
          disabled={!hasConfirmed}>Redirect to new domain
        </button>

      </div>
    </S.Container>
  );
};
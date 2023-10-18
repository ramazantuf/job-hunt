package ykpsph.jobhunt.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
public class JobAPIException extends RuntimeException{
    private HttpStatus httpStatus;
    private String message;
}

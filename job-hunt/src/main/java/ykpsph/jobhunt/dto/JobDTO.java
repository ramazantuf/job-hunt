package ykpsph.jobhunt.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class JobDTO {
    private Long id;
    private String companyName;
    private String hirer;
    private LocalDate date;
    private Long titleId;
    private String titleName;
    private Long positionId;
    private String positionName;
    private Long stageId;
    private String stageName;
    private Long locationId;
    private String locationName;
}

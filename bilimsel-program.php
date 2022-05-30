
			<?php
            header("Content-type:application/pdf");

            // It will be called downloaded.pdf
            header("Content-Disposition:attachment;filename=4-Genc-Pediatrik-Alerjistler-Sempozyumu-Bilimsel-Program-19-20-21-Mayis-2022.pdf");
            // The PDF source is in original.pdf
            readfile("doc/4-Genc-Pediatrik-Alerjistler-Sempozyumu-Bilimsel-Program-19-20-21-Mayis-2022.pdf");
			?>
